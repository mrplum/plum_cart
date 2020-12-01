import React, { useEffect } from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import mercadopago from "mercadopago";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
const ShoppingCart = (): JSX.Element => {
  const [state, setState] = React.useState({ bol: false, dir: "" });

  const items = [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ];

  const payer = {
    email: "test_user_69999056@testuser.com",
  };

  const configureMercadoPago = () => {
    try {
      mercadopago.configure({
        sandbox: true,
        access_token:
          "TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const set = () => {
    fetch(
      "https://api.mercadopago.com/checkout/preferences?access_token=TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171",
      {
        method: "POST",
        body: JSON.stringify({ items, payer }),
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer ACCESS_TOKEN_ENV",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setState({ bol: true, dir: response.init_point });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    set();
  }, []); //cambiar cuando cambien los elementos del carrito

  configureMercadoPago();
  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
      </div>
      <div className={style.containerButton}>
        {state.bol ? (
          <Link to={{ pathname: state.dir }} target="_blank">
            <Button
              label={useIntl().formatMessage({ id: "pay" })}
              dark={true}
              primary={true}
              large={true}
            />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
