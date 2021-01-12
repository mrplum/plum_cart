import React, { useState, useEffect } from "react";
import SwitchView from "../SwitchView";
import IProduct from "../IProduct";
import ImageList from "../List/ImageList";
import CardList from "../List/CardList";
import style from "./Main.module.css";
import { useIntl } from "react-intl";
import IPagination from "../IPagination";

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
  search: string;
  title: string;
}

const Main = (props: IMainProps): JSX.Element => {
  const [state, setState] = useState<IPagination>({
    products: [],
    page: 1,
  });

  useEffect(() => {
    setState({ products: [], page: 1 });
  }, [props.search]);

  const setPagination = (products: Array<IProduct>): void => {
    const newProducts = state.products.concat(products);
    setState({ products: newProducts, page: state.page + 1 });
  };
  const title = useIntl().formatMessage({ id: "title" });
  return (
    <div className={style.root}>
      <SwitchView status={props.status} handler={props.toggleViewHandler} />
      <h1 className={style.title}>{props.title ? props.title : title}</h1>
      {props.status ? (
        <CardList
          data={state.products}
          page={state.page}
          setPagination={setPagination}
          search={props.search ? `search=${props.search}&` : ""}
        />
      ) : (
        <ImageList
          data={state.products}
          page={state.page}
          setPagination={setPagination}
          search={props.search ? `search=${props.search}&` : ""}
        />
      )}
    </div>
  );
};
export default Main;
