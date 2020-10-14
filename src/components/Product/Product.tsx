import React from 'react';
// import IDataJson from '../DataJson';
import SelectButton from '../SelectButton';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import style from './Product.module.css';
import {withRouter} from 'react-router-dom';
import { Select } from '@material-ui/core';

{/*const Product = (data: IDataJson): JSX.Element =>  (*/}
  const Product = ({location}): JSX.Element =>  {
    const data= location.state.data;
    const values=[];
    for (let i = 1; i <= data.stock ; i++) {
      values.push(i+'');
  }
    return(
    <div className={style.root}>
        <h1 className={style.title}>{data.title} </h1>
        <div className={style.container}>
              <img src={`/${data.img}`} alt={''} className={style.img}></img>
              <h2 className={style.description}>{data.description}</h2>
              <p className={style.price}>${data.price}</p>
              <div className={style.containerButton}>
                <IconButton   aria-label={`star ${data.title}`} color={"primary"} >
                      <AddShoppingCartIcon />
                      <p>Add</p>
                </IconButton>
                <SelectButton name="Quantity" values={values}/>
              </div>
        </div>
    </div>
  );
}

export default withRouter(Product);