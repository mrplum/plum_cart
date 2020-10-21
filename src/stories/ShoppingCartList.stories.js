import React from "react";

import ShoppingCartList from "../components/List/ShoppingCartList.tsx";
import boca from "../public/images/camBoca.png";

export default {
  title: "components/List/ShoppingCartList",
  component: ShoppingCartList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ShoppingCartList {...args} />;

export const NormalMode = Template.bind({});
NormalMode.args = {
  data: [
    {
      id: "1",
      img: boca,
      title: "Shirt Boca",
      price: 6450.0,
      quantity: 1,
    },
    {
      id: "2",
      img: boca,
      title: "Shirt Boca",
      price: 6450.0,
      quantity: 1,
    },
    {
      id: "3",
      img: boca,
      title: "Shirt Boca",
      price: 6450.0,
      quantity: 1,
    },
  ],
};
