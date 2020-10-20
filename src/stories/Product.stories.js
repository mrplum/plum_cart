import React from "react";

import Product from "../components/Product";
import boca from "../public/images/camBoca.png";

export default {
  title: "components/Product",
  component: Product,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Product {...args} />;

export const NormalMode = Template.bind({});
NormalMode.args = {
  data: {
    id: "4",
    img: boca,
    title: "Shirt Boca",
    price: 6450.0,
    description: "Material: 60% Polyester: +40% cotton. MACHINE WASH",
    stock: 5,
    featured: false,
  },
};
