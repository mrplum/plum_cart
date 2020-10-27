import React, { useState } from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import IProductShoppingCart from "../IProductShoppingCart";
import style from "./ShoppingCart.module.css";
import { FormattedMessage } from "react-intl";

const ShoppingCart = (): JSX.Element => {
  const data = JSON.parse(localStorage.getItem("shoppingcart"));
  const [state, setState] = useState<{
    list: Array<IProductShoppingCart>;
  }>({
    list: data,
  });

  const deleteProduct = (e: React.ChangeEvent<{ id: string }>) => {
    const arrayList = state.list;
    const newList = arrayList.filter((p) => p.id !== e.currentTarget.id);
    setState({
      ...state,
      list: newList,
    });
    localStorage.setItem("shoppingcart", JSON.stringify(newList));
  };

  let empty = !data;
  let total = 0;
  if (!empty) {
    if (data.length === 0) {
      empty = true;
    }
    for (let i = 0; i < state.list.length; i++) {
      total += state.list[i].price;
    }
  }
  return (
    <div className={style.root}>
      {!empty ? (
        <div>
          <ShoppingCartList data={data} deleteP={deleteProduct} />
          <p>TOTAL= ${total}</p>
        </div>
      ) : (
        <p>
          <FormattedMessage id="emptyCart" />
        </p>
      )}
    </div>
  );
};

export default ShoppingCart;
