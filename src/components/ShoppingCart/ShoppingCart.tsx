import React, { useContext } from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import Mercadopago from "../Mercadopago";
import { CartContext } from "../../context/CartContext";

const ShoppingCart = (): JSX.Element => {
  const { state } = useContext(CartContext);

  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
      </div>
      <Mercadopago cart={state}/>
    </div>
  );
};

export default ShoppingCart;
