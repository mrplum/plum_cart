import React from "react";
import SwitchView from "../SwitchView";
import IDataJson from "../DataJson";
import ImageList from "../List/ImageList";
import CardList from "../List/CardList";
import style from "./Main.module.css";
import { FormattedMessage } from "react-intl";

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
  data: IDataJson[];
}

const Main = (props: IMainProps): JSX.Element => {
  return (
    <div className={style.root}>
      <SwitchView status={props.status} handler={props.toggleViewHandler} />
      <h1 className={style.title}>
        <FormattedMessage id="title" />
      </h1>

      {props.status ? (
        <CardList data={props.data} />
      ) : (
        <ImageList data={props.data} />
      )}
    </div>
  );
};
export default Main;
