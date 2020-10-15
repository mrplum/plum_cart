import React from 'react';
import List from '@material-ui/core/List';
import ProductShoppingCart from '../ProductShoppingCart';
import IProductShoppingCart from '../IProductShoppingCart';

const ShoppingCartList = ({
    data
}:{
    data: Array<IProductShoppingCart>;
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
              quantity={product.qty} />
      ))}
    </List>
  );
}

export default ShoppingCartList;