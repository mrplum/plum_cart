import React from 'react';
import SwitchView from '../SwitchView';
import IDataJson from '../DataJson';
import ImageList from '../List/ImageList';
import CardList from '../List/CardList';
import style from './Main.module.css';
import IProductShoppingCart from '../IProductShoppingCart';


interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
  data: IDataJson[];
}

const Main = (props: IMainProps): JSX.Element => {

  const addProduct = (product: IProductShoppingCart) => {
    console.log(product);
    const old = JSON.parse(localStorage.getItem('shoppingcart'));
    const aux={
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price * product.qty,
      qty:product.qty
    };
    if(old === null){
      const array=[];
      array.push(aux);
      localStorage.setItem('shoppingcart', JSON.stringify(array));
    }
    else{
      const element= old.find(p => p.id === aux.id);
      console.log(element);
      if(element){
        const newList= old.filter(p=> p.id !== aux.id);
        aux.qty= aux.qty + parseInt(element.qty,10);
        aux.price= aux.price + parseInt(element.price,10);
        newList.push(aux);
        localStorage.setItem('shoppingcart', JSON.stringify(newList));
      }
      else{
        old.push(aux);
        localStorage.setItem('shoppingcart', JSON.stringify(old));
      }
    }
    
    alert('product added');
  };
  return (
    <div className={style.root}>
      <div className={style.title}> 
        <h1>The Shirt Store</h1>
      </div>

      <SwitchView
        status={props.status}
        handler={props.toggleViewHandler} />

      {props.status ?
        <CardList data={props.data} addP={addProduct} /> :
        <ImageList data={props.data} addP={addProduct} />}
    </div>
  );
}
export default Main;