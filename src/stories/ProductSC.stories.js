import React from 'react';

import ProductShoppingCart from '../components/ProductShoppingCart';
import boca from '../public/images/camBoca.png';

export default {
  title: 'components/ProductShoppingCart',
  component: ProductShoppingCart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ProductShoppingCart {...args} />;

export const NormalMode = Template.bind({});
NormalMode.args = {
      img: boca,
      title:'Shirt Boca',
      price: 6450.00,
      quantity: 1
};
