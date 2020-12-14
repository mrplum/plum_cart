import React from "react";
import List from "@material-ui/core/List";
import ProductShoppingCart from "../ProductShoppingCart";
import datajson from "../../data";
import { FormattedMessage } from "react-intl";
import style from "./List.module.css";
import NumberFormat from "react-number-format";
import IProductShoppingCart from "../IProductShoppingCart";

const ShoppingCartList = ({
  modifyQty,
  modifyDelete,
  list,
}: {
  modifyQty: boolean;
  modifyDelete: boolean;
  list: Array<IProductShoppingCart>;
}): JSX.Element => {
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
    let data;

    return (
      <div>
        <List>
          {list.map((product) => {
            data = datajson.find((e) => e.id === product.id);
            return (
                <ProductShoppingCart
                key={product.id}
                id={product.id}
                img={data?.img}
                title={product.title}
                unit_price={product.unit_price}
                quantity={product.quantity}
                stock={data?.stock}
                modifyQty={modifyQty}
                modifyDelete={modifyDelete}
              />
            )
          })}
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
