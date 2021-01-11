import React, { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import mercadopago from "mercadopago";
import { Button } from "@material-ui/core";
import style from "./Mercadopago.module.css";
import IProductShoppingCart from "../IProductShoppingCart";
import { BlackButton } from "../Button";

const SANDBOX = true;
const ACCESS_TOKEN = "TEST-1807600686871209-112614-729d1dbd3c5e18b0dd6bf00117ad00b6-678201171";

interface MercadopagoProps {
  cart: {
    list: IProductShoppingCart[];
  };
  disabled: boolean;
}

const Mercadopago = (props: MercadopagoProps): JSX.Element => {
  const [{ pathname }, setState] = useState({ pathname: "" });

  useEffect(() => {
    const configureMercadoPago = async () => {
      try {
        mercadopago.configure({ sandbox: SANDBOX, access_token: ACCESS_TOKEN });
        const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + ACCESS_TOKEN,
          },
          body: JSON.stringify({
            items: props.cart.list,
            payer: { email: "test_user_69999056@testuser.com" },
            back_urls: {
              success: window.location.origin + "/success",
              failure: window.location.origin,
            },
            auto_return: "approved",
          }),
        });

        const jsonResponse = await response.json();

        setState({ pathname: jsonResponse.init_point });
      } catch (error) {
        console.warn(error);
      }
    };
    if (props.cart.list.length !== 0) {
      configureMercadoPago();
    }
  }, [props.cart]);

  const handleCheckout = useCallback(() => {
    if (pathname && pathname.length) {
      window.location.replace(pathname);
    }
  }, [pathname]);

  return (
    <div className={style.containerButton}>
      <BlackButton
        form="shipping"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        onClick={handleCheckout}
        disabled={props.disabled || pathname === null || props.cart.list.length === 0}
      >
        {useIntl().formatMessage({ id: "pay" })}
      </BlackButton>
    </div>
  );
};

export default Mercadopago;
