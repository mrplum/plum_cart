import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import mercadopago from 'mercadopago';
import Button from '../Button';
import style from './Mercadopago.module.css';
import IProductShoppingCart from '../IProductShoppingCart';

const SANDBOX = true;
const ACCESS_TOKEN = 'TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171';

interface MercadopagoProps {
  cart: {
    list: IProductShoppingCart[]
  }
}

const Mercadopago = (props: MercadopagoProps): JSX.Element => {
  const [{ pathname }, setState] = useState({ pathname: null });

  useEffect(() => {
    const configureMercadoPago = async () => {
      try {
        mercadopago.configure({ sandbox: SANDBOX, access_token: ACCESS_TOKEN });
        const response = await fetch(
          'https://api.mercadopago.com/checkout/preferences',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              Authorization: 'Bearer ' + ACCESS_TOKEN,
            },
            body: JSON.stringify({
              items: props.cart.list,
              payer: { email: 'test_user_69999056@testuser.com' },
            }),
          }
        );

        const jsonResponse = await response.json();

        setState({ pathname: jsonResponse.init_point });
      } catch (error) {
        console.warn(error);
      }

    };

    configureMercadoPago();
  }, [props.cart]);

  return (
    <div className={style.containerButton}>
      <Link to={{ pathname }} target="_blank" disabled>
        <Button
          label={useIntl().formatMessage({ id: 'pay' })}
          dark={true}
          primary={true}
          large={true}
        />
      </Link>
    </div>
  );
};

export default Mercadopago;
