import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ProductShoppingCart from "../ProductShoppingCart";
import datajson from "../../data.json";
import { FormattedMessage } from "react-intl";
import { CartContext } from "../../context";
import style from "./List.module.css";
import NumberFormat from "react-number-format";

const ShoppingCartList = (): JSX.Element => {
  const { list, deleteProduct } = useContext(CartContext);
  let empty = !list;
  let total = 0;
  if (!empty) {
    if (list.length === 0) {
      empty = true;
    }
    for (let i = 0; i < list.length; i++) {
      total += list[i].price;
    }
  }
  return (
    <div className={style.cart}>
      {!empty ? (
        <div>
          <List>
            {list.map((product) => (
              <ProductShoppingCart
                key={product.id}
                id={product.id}
                img={datajson.find((e) => e.id === product.id).img}
                title={datajson.find((e) => e.id === product.id).title}
                price={product.price}
                quantity={product.qty}
                deleteP={deleteProduct}
              />
            ))}
          </List>
          <p>
            TOTAL=
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </div>
      ) : (
        <p className={style.message}>
          <FormattedMessage id="emptyCart" />
        </p>
      )}
    </div>
  );
};

export default ShoppingCartList;
