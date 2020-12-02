import React from "react";
import { useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import { Link } from "react-router-dom";
import Button from "../Button";
import style from "./ShoppingCart.module.css";

const ShoppingCart = (): JSX.Element => {
  const intl = useIntl();
  return (
    <div className={style.root}>
      <div className={style.list}>
        <ShoppingCartList />
        <Link
          to={{
            pathname: "/shipping",
          }}
        >
          <Button label={intl.formatMessage({ id: "buy" })} primary={true} />
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
