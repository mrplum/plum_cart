import React, { useState } from "react";
import ShoppingCartList from "../List/ShoppingCartList";
import IProductShoppingCart from "../IProductShoppingCart";

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

  return <ShoppingCartList data={data} deleteP={deleteProduct} />;
};

export default ShoppingCart;
