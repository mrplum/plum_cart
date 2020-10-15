import React from 'react';
import ShoppingCartList from '../List/ShoppingCartList';
import IProductShoppingCart from '../IProductShoppingCart';

const ShoppingCart = () => {
  const data= localStorage.getItem('shoppingcart');
  const [state, setState]  = React.useState<{ list: Array<IProductShoppingCart> }>({
    list: JSON.parse(data),
  });

  const deleteProduct = (idd:string ) => {
    console.log("aqui");

    const list = localStorage.getItem('shoppingcart');
    const aux = JSON.parse(list);
    const aux2= aux.filter(p => p.id !== idd);
    setState({
      ...state,
      list:aux2,
    });
    localStorage.setItem('shoppingcart', JSON.stringify(aux2));
  } ;

  console.log(data);
  return(
    <div>
      {(data) ? <ShoppingCartList data={JSON.parse(data)} deleteP={deleteProduct} /> 
      :
      <p>Your shopping cart is empty!</p>}
    </div>
  );
}

export default ShoppingCart;