import React from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";

const ShoppingCart = (): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
      </div>
    </div>
  );
};

export default ShoppingCart;
