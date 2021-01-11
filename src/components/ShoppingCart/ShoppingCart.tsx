import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import { BlackButton } from "../Button";
import { CartContext } from "../../context/CartContext";
import { Card } from "@material-ui/core";

const ShoppingCart = (): JSX.Element => {
  const { cart } = useContext(CartContext);
  const intl = useIntl();

  return (
    <div className={style.root}>
      <Card className={style.cart}>
        <h1 className={style.title}>
          <FormattedMessage id="cartTitle" />
        </h1>
        <ShoppingCartList modifyQty={true} modifyDelete={true} list={cart.list} />
        {cart.list && cart.list.length !== 0 ? (
          <Link to={{ pathname: "/shipping" }} className={style.buttonContainer}>
            <BlackButton variant="contained" color="primary" size="large" className={style.button}>
              {intl.formatMessage({ id: "buy" })}
            </BlackButton>
          </Link>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};

export default ShoppingCart;
