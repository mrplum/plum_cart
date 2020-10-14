import React from 'react';
import IDataJson from '../DataJson';
import style from './Product.module.css';
import {withRouter} from 'react-router-dom';

{/*const Product = (data: IDataJson): JSX.Element =>  (*/}
  const Product = ({location}): JSX.Element =>  {
    return(
    <div className={style.root}>
        <h1 className={style.title}>{location.state.data.title} </h1>
        <div className={style.container}>
              <img src={`/${location.state.data.img}`} alt={''} className={style.img}></img>
              <h2 className={style.description}>{location.state.data.description}</h2>
              <p className={style.price}>${location.state.data.price}</p>
        </div>
    </div>
  );
}

export default withRouter(Product);