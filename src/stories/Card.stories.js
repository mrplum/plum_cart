import React from 'react';

import { Card } from '../components/Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
