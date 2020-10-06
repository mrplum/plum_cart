import React from 'react';

import { Card } from '../components/Card';
import boca from '../camBoca.PNG';
import yoda from '../yoda.jpg';

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

export const NormalMode = Template.bind({});
NormalMode.args = {
  dark: false,
  title: 'Camiseta Boca Juniors',
  img: boca,
  price: 3252.99
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  dark: true,
  title: 'Camiseta baby yoda',
  img: yoda,
  price: 1022.99
};
