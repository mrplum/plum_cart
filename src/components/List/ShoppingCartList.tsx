import React from 'react';
import List from '@material-ui/core/List';
import ProductShoppingCart from '../ProductShoppingCart';
import datajson from '../../data.json';
import IProductShoppingCart from '../IProductShoppingCart';

const ShoppingCartList = ({
    data,
    deleteP
}:{
    data: Array<IProductShoppingCart>;
    deleteP: (e: React.ChangeEvent<{id: string}>) => void;
}): JSX.Element => {
  return (
    <List>
      {data.map((product) => (
        <ProductShoppingCart 
              key={product.id}
              id={product.id}
              img={datajson.find(e=> e.id === product.id).img} 
              title={datajson.find(e => e.id === product.id).title}
              price={product.price}
              quantity={product.qty}
              deleteP={deleteP} />
      ))}
    </List>
  );
}

export default ShoppingCartList;