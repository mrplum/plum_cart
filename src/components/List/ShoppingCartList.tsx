import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ProductShoppingCart from "../ProductShoppingCart";
import datajson from "../../data.json";
import { FormattedMessage } from "react-intl";
import { CartContext } from "../../context";
import style from "./List.module.css";
import NumberFormat from "react-number-format";

const ShoppingCartList = (): JSX.Element => {
  const { cart } = useContext(CartContext);
  const list = cart.list;
  let empty = !list;
  let total = 0;
  if (!empty) {
    if (list.length === 0) {
      empty = true;
    }
    for (let i = 0; i < list.length; i++) {
      total += list[i].unit_price * list[i].quantity;
    }
  }
  if (empty) {
    return (
      <p className={style.message}>
        <FormattedMessage id="emptyCart" />
      </p>
    );
  } else {
    return (
      <div>
        <List>
          {list.map((product) => (
            <ProductShoppingCart
              key={product.id}
              id={product.id}
              img={datajson.find((e) => e.id === product.id).img}
              title={product.title}
              unit_price={product.unit_price}
              quantity={product.quantity}
            />
          ))}
          <p className={style.cartTotal}>
            Total &nbsp;
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </List>
      </div>
    );
  }
};

export default ShoppingCartList;
