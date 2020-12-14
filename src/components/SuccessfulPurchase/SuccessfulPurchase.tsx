import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CartContext } from "../../context";
import style from "./SuccessfulPurchase.module.css";
import ShoppingCartList from "../List/ShoppingCartList";
import IProductShoppingCart from "../IProductShoppingCart";

const SuccessfulCheck = withStyles({
  root: { color: green[500], width: "40%", height: "40%" },
})(CheckCircleIcon);

const SuccessfulPurchase = (): JSX.Element => {
  const { dispatch, cart } = useContext(CartContext);
  const [state, setState] = useState({
    list: [] as IProductShoppingCart[],
  });
  useEffect(() => {
    if (cart.list.length !== 0) {
      setState({list: cart.list});
    }
    dispatch({ type: "cleanCart" });
  }, []);

  return (
    <div className={style.root}>
      <IconButton>
        <SuccessfulCheck />
      </IconButton>
      <h1>
        <FormattedMessage id="successfulPurchase" />
      </h1>
      <h4 className={style.title}>
        <FormattedMessage id="productsBought" />
      </h4>
      <br />
      <ShoppingCartList
        modifyQty={false}
        modifyDelete={false}
        list={state.list}
      />
    </div>
  );
};

export default SuccessfulPurchase;
