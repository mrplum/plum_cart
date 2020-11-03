import React from "react";
import List from "@material-ui/core/List";
import ProductShoppingCart from "../ProductShoppingCart";
import datajson from "../../data.json";
import IProductShoppingCart from "../IProductShoppingCart";
import { FormattedMessage } from "react-intl";

const ShoppingCartList = ({
  data,
  deleteP,
}: {
  data: Array<IProductShoppingCart>;
  deleteP: (e: React.ChangeEvent<{ id: string }>) => void;
}): JSX.Element => {
  let empty = !data;
  let total = 0;
  if (!empty) {
    if (data.length === 0) {
      empty = true;
    }
    for (let i = 0; i < data.length; i++) {
      total += data[i].price;
    }
  }
  return (
    <div>
      {!empty ? (
        <div>
          <List>
            {data.map((product) => (
              <ProductShoppingCart
                key={product.id}
                id={product.id}
                img={datajson.find((e) => e.id === product.id).img}
                title={datajson.find((e) => e.id === product.id).title}
                price={product.price}
                quantity={product.qty}
                deleteP={deleteP}
              />
            ))}
          </List>
          <p>TOTAL= ${total}</p>
        </div>
      ) : (
        <p>
          <FormattedMessage id="emptyCart" />
        </p>
      )}
    </div>
  );
};

export default ShoppingCartList;
