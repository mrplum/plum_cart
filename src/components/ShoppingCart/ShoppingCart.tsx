import React from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import Mercadopago from "../Mercadopago";
const ShoppingCart = (): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
      </div>
      <Mercadopago />
    </div>
  );
};

export default ShoppingCart;
