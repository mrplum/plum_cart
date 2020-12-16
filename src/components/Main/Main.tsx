import React, { useState } from "react";
import SwitchView from "../SwitchView";
import IDataJson from "../DataJson";
import ImageList from "../List/ImageList";
import CardList from "../List/CardList";
import style from "./Main.module.css";
import { FormattedMessage } from "react-intl";

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
}

const Main = (props: IMainProps): JSX.Element => {
  const [products, setProducts] = useState<Array<IDataJson>>([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://miguia.herokuapp.com/api/v1/products"
        );
        const jsonResponse = await response.json();
        setProducts(jsonResponse.data);
      } catch (error) {
        console.warn(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={style.root}>
      <SwitchView status={props.status} handler={props.toggleViewHandler} />
      <h1 className={style.title}>
        <FormattedMessage id="title" />
      </h1>
      {props.status ? (
        <CardList data={products} />
      ) : (
        <ImageList data={products} />
      )}
    </div>
  );
};
export default Main;
