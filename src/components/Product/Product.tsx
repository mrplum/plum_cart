import React, { useState, useContext } from "react";
import IDataJson from "../DataJson";
import SelectButton from "../SelectButton";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import style from "./Product.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import { CartContext } from "../../context";

const Product = ({ data }: { data: IDataJson }): JSX.Element => {
  const [state, setState] = useState<{ qty: number }>({
    qty: 1,
  });
  const { addProduct } = useContext(CartContext);
  const intl = useIntl();
  const message = intl.formatMessage({ id: "prodAdded" });
  const handleChange = (value: string) => {
    setState({
      ...state,
      qty: parseInt(value),
    });
  };

  const addProductAux = (event: React.ChangeEvent) => {
    event.preventDefault();
    addProduct(data.id, data.price * state.qty, state.qty, message);
  };

  const values = [];
  for (let i = 1; i <= data.stock; i++) {
    values.push(i);
  }
  return (
    <div className={style.root}>
      <div className={style.left}>
        <div className={style.centeredLeft}>
          <h1 className={style.title}>{data.title} </h1>
          <img src={`/${data.img}`} alt={""} className={style.img}></img>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.centeredRight}>
          <h2 className={style.description}>{data.description}</h2>
          <div className={style.containerButton}>
            <IconButton
              aria-label={`star ${data.title}`}
              color={"default"}
              onClick={addProductAux}
            >
              <AddShoppingCartIcon />
              <p>
                <FormattedMessage id="buttonAdd" />
              </p>
            </IconButton>
            <SelectButton
              name={intl.formatMessage({ id: "quantity" }, { qty: "" })}
              values={values}
              valuesName={values}
              handle={handleChange}
              defaultValue="1"
            />
          </div>
          <p className={style.price}>${data.price * state.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
