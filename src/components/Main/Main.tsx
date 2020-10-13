import React from 'react';
import SwitchView from '../SwitchView';
import IDataJson from '../DataJson';
import ImageList from '../List/ImageList';
import CardList from '../List/CardList';
import style from './Main.module.css';
import { ProgressPlugin } from 'webpack';

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
  data: IDataJson[];
}

const Main = (props: IMainProps): JSX.Element =>  (
  <div className={style.root}>
    <div className={style.title}> 
      <h1>The Shirt Store</h1>
    </div>

    <SwitchView
      status={props.status}
      handler={props.toggleViewHandler} />

    {props.status ?
      <CardList data={props.data} /> :
      <ImageList data={props.data} />}
  </div>
);

export default Main;