import React, { useContext, useEffect, useState, useCallback } from 'react';
import mercadopago from 'mercadopago';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { CartContext } from '../../context';
import style from './Mercadopago.module.css';

const sandbox = true;
const access_token = 'TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171';

const Mercadopago = (): JSX.Element => {
  const { state } = useContext(CartContext);
  const [s, setState] = useState({ bol: false, dir: '' });

  const set = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.mercadopago.com/checkout/preferences',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
          body: JSON.stringify({
            items: state.list,
            payer: { email: 'test_user_69999056@testuser.com' },
          }),
        }
      );
      
      const jsonResponse = await response.json();
      setState({ bol: true, dir: jsonResponse.init_point });
    } catch (error) {
      console.log(error);
    }

  }, [state.list]);

  useEffect(() => {
    set();
  }, [state.list]);

  useEffect(() => {
    try {
      mercadopago.configure({ sandbox, access_token });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={style.containerButton}>
      {s.bol && (
        <Link to={{ pathname: s.dir }} target="_blank">
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
