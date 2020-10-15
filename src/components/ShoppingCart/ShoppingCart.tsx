import React from 'react';
import ShoppingCartList from '../List/ShoppingCartList';

const ShoppingCart = () => {
  const data= localStorage.getItem('shoppingcart');
  console.log(data);
  return(
    <div>
      {data? <ShoppingCartList data={JSON.parse(data)} /> 
      :
      <p>Your shopping cart is empty!</p>}
    </div>
  );
}

export default ShoppingCart;