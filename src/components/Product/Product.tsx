import React from 'react';
import IDataJson from '../DataJson';
import style from './Product.module.css';


const Product = (data: IDataJson): JSX.Element =>  (
  <div className={style.root}>
      <h1 className={style.title}>{data.title} </h1>
      <div className={style.container}>
            <img src={data.img} alt={''} className={style.img}></img>
            <h2 className={style.description}>{data.description}</h2>
            <p className={style.price}>${data.price}</p>
      </div>
  </div>
);

export default Product;