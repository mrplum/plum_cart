import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import mercadopago from 'mercadopago';
import { CartContext } from '../../context';
import Button from '../Button';
import style from './Mercadopago.module.css';

const SANDBOX = true;
const ACCESS_TOKEN = 'TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171';

const Mercadopago = (): JSX.Element => {
  const [{ pathname }, setState] = useState({ pathname: null });
  const { state: cart } = useContext(CartContext);

  const set = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.mercadopago.com/checkout/preferences',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + ACCESS_TOKEN,
          },
          body: JSON.stringify({
            items: cart.list,
            payer: { email: 'test_user_69999056@testuser.com' },
          }),
        }
      );

      const jsonResponse = await response.json();

      setState({ pathname: jsonResponse.init_point });
    } catch (error) {
      console.warn(error);
    }

  }, [cart.list]);

  useEffect(() => {
    set();

    try {
      mercadopago.configure({ sandbox: SANDBOX, access_token: ACCESS_TOKEN });
    } catch (error) {
      console.log(error);
    }
  }, [cart.list]);

  return (
    <div className={style.containerButton}>
      {pathname && (
        <Link to={{ pathname }} target="_blank">
          <Button
            label={useIntl().formatMessage({ id: 'pay' })}
            dark={true}
            primary={true}
            large={true}
          />
        </Link>
      )}
    </div>
  );
};

export default Mercadopago;
