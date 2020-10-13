import React from 'react';

import Product from '../components/Product';
import boca from '../public/images/camBoca.png';

export default {
  title: 'components/Product',
  component: Product,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Product {...args} />;

export const NotFound = Template.bind({});
NotFound.args = { 
};

export const NormalMode = Template.bind({});
NormalMode.args = {
    id: "4",
    img: boca,
    title:"Shirt Boca",
    description:"Material: 60% Polyester: +40% cotton. MACHINE WASH",
    price: 6450.00,
    stock: 13,
    featured: false
};
