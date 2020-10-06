import React from 'react';

import Button from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  dark:false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary:false,
  dark:false,
  label: 'Button',
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  primary: true,
  dark:true,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  large: false,
  label: 'Button',
};
