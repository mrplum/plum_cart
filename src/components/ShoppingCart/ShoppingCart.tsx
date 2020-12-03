import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import style from "./ShoppingCart.module.css";
import { Button } from "@material-ui/core";
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
        <ShoppingCartList />
        {cart.list && cart.list.length !== 0 ? (
          <Link to={{ pathname: "/shipping" }} className={style.button}>
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              {intl.formatMessage({ id: "buy" })}
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};

export default ShoppingCart;
