import React, { useEffect } from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import mercadopago from "mercadopago";

const ShoppingCart = (): JSX.Element => {
  const items = [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ];
  const payer = {
    id: 678200308,
    nickname: "TETE5230687",
    password: "qatest4140",
    site_status: "active",
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
  configureMercadoPago();

  const set = () => {
    console.log("aqui ");
    window.Mercadopago.setPublishableKey(
      "TEST-052be207-ac32-403f-81d3-e418fd7255e6"
    );

    const a = mercadopago.preferences
      .create({ items })
      .then((response) => {
        console.log("here ", response);
        const script = document.createElement("script");
        script.src =
          //esto creo que deberia ser el response.init_point
          "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.setAttribute("data-preference-id", response.body.id);
        document.getElementById("mercadoForm").appendChild(script);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(a);
  };
  /*
  //Option 2
const set = async () => {
    console.log("aqui ");
    const aux = await mercadopago.preferences.create({ items, payer });
    // .then((response) => {
    const script = document.createElement("script");
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    //or response.body.id
    script.setAttribute("data-preference-id", "<%= global.id %>");
    document.getElementById("mercadoForm").appendChild(script);
    /* })
      .catch((error) => {
        console.log(error);
      });
      console.log(aux);
      return aux;
    };
  */
  useEffect(() => {
    set();
  }, []);

  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
      </div>
      <form action="/procesar-pago" method="POST" id="mercadoForm" />
    </div>
  );
};

export default ShoppingCart;
