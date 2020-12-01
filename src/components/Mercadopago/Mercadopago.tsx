import React, { useContext, useEffect, useState } from "react";
import mercadopago from "mercadopago";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { CartContext } from "../../context";
import style from "./Mercadopago.module.css";

const Mercadopago = (): JSX.Element => {
  const { state } = useContext(CartContext);
  const [s, setState] = useState({ bol: false, dir: "" });

  const items = state.list;

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
  }, [state.list]); //cambiar cuando cambien los elementos del carrito

  configureMercadoPago();
  return (
    <div className={style.containerButton}>
      {s.bol ? (
        <Link to={{ pathname: s.dir }} target="_blank">
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
  );
};

export default Mercadopago;
