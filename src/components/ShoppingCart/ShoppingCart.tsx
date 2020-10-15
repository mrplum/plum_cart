import React from 'react';
import ShoppingCartList from '../List/ShoppingCartList';
import IProductShoppingCart from '../IProductShoppingCart';

const ShoppingCart = () : JSX.Element => {
  const data= JSON.parse(localStorage.getItem('shoppingcart'));
  const [state, setState]  = React.useState<{ list: Array<IProductShoppingCart> }>({
    list: data,
  });

  const deleteProduct = (e: React.ChangeEvent<{id: string}>) => {
    const arrayList= state.list;
    const newList= arrayList.filter(p => p.id !== e.currentTarget.id);
    setState({
      ...state,
      list:newList,
    });
    localStorage.setItem('shoppingcart', JSON.stringify(newList));
  } ;

  let empty= !data;
  if(!empty){
    if(data.length === 0){
      empty=true;
    }
  }
  return(
    <div>
      {(!empty) ? <ShoppingCartList data={data} deleteP={deleteProduct} /> 
      :
      <p>Your shopping cart is empty!</p>}
    </div>
  );
}

export default ShoppingCart;