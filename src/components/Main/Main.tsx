import React, { useState } from "react";
import SwitchView from "../SwitchView";
import IProduct from "../IProduct";
import ImageList from "../List/ImageList";
import CardList from "../List/CardList";
import style from "./Main.module.css";
import { FormattedMessage } from "react-intl";
import IPagination from "../IPagination";

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
}

const Main = (props: IMainProps): JSX.Element => {
  const [state, setState] = useState<IPagination>({
    products: [],
    page: 1,
  });

  const setPagination = (products: Array<IProduct>): void => {
    const newProducts = state.products.concat(products);
    setState({ products: newProducts, page: state.page + 1 });
  };

  return (
    <div className={style.root}>
      <SwitchView status={props.status} handler={props.toggleViewHandler} />
      <h1 className={style.title}>
        <FormattedMessage id="title" />
      </h1>
      {props.status ? (
        <CardList data={state.products} page={state.page} setPagination={setPagination} />
      ) : (
        <ImageList data={state.products} />
      )}
    </div>
  );
};
export default Main;
