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

  return (
    <div className={style.root}>
      <Card className={style.cart}>
        <h1 className={style.title}>
          <FormattedMessage id="cartTitle" />
        </h1>
        <ShoppingCartList />
        {cart.list.length !== 0 ? (
          <Link to={{ pathname: "/shipping" }}>
            <Button
              className={style.button}
              variant="contained"
              color="primary"
              size="large"
            >
              {useIntl().formatMessage({ id: "buy" })}
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
