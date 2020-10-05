import React from 'react';

import { Card } from '../components/Card';
import boca from '../camBoca.PNG';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const NotFound = Template.bind({});
NotFound.args = {
  
};

export const BocaJuniors = Template.bind({});
BocaJuniors.args = {
  title: 'Camiseta Boca Juniors - 2020',
  img: boca,
  price: 3252.99
};
