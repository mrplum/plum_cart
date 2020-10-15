import React from 'react';
import List from '@material-ui/core/List';
import ProductShoppingCart from '../ProductShoppingCart';
import IProductShoppingCart from '../IProductShoppingCart';

const ShoppingCartList = ({
    data,
    deleteP
}:{
    data: Array<IProductShoppingCart>;
    deleteP: (idd: string) => void;
}): JSX.Element => {
  return (
    <List>
      {data.map((product) => (
        <ProductShoppingCart 
              key={product.id}
              id={product.id}
              img={product.img} 
              title={product.title}
              price={product.price}
              quantity={product.qty}
              deleteP={deleteP} />
      ))}
    </List>
  );
}

export default ShoppingCartList;