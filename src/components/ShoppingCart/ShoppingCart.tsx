import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import Mercadopago from "../Mercadopago";
import { CartContext } from "../../context/CartContext";
import { Card } from '@material-ui/core';

const ShoppingCart = (): JSX.Element => {
  const { state } = useContext(CartContext);

  return (
    <div className={style.root}>
      <Card className={style.cart}>
        <h1 className={style.title}>
          <FormattedMessage id="cartTitle" />
        </h1>
        <ShoppingCartList />
        <Mercadopago cart={state}/>
      </Card>
    </div>
  );
};

export default ShoppingCart;
