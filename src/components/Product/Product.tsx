import React, { useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import IProduct from "../IProduct";
import SelectButton from "../SelectButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FormattedMessage, useIntl } from "react-intl";
import { CartContext } from "../../context";
import NumberFormat from "react-number-format";
import styles from "./Product.module.css";
import { Box, Card, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { BlackButton } from "../Button";

interface ProductProps {
  data: IProduct;
}

const Product = ({ data }: ProductProps): JSX.Element => {
  const [state, setState] = useState<{ qty: number }>({
    qty: 1,
  });
  const { dispatch } = useContext(CartContext);
  const intl = useIntl();
  const handleChange = (value: string) => {
    setState({
      ...state,
      qty: parseInt(value),
    });
  };

  const addProductAux = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch({
      type: "addProduct",
      payload: {
        id: data.id,
        image: data.attributes.image,
        title: data.attributes.name,
        unit_price: parseInt(data.attributes.price),
        quantity: state.qty,
      },
    });
  };

  const values = [];
  for (let i = 1; i <= 20; i++) {
    values.push(i);
  }
  return (
    <div className={styles.root}>
      <Card className={styles.wrapper}>
        <div className={styles.product}>
          <img src={data.attributes.image} alt="" className={styles.img}></img>
        </div>
        <Paper variant="outlined" className={styles.details}>
          <Box color="black" className={styles.title}>
            {data.attributes.name}
          </Box>
          <Box color="rgba(0, 0, 0, 0.72)" className={styles.description}>
            {data.attributes.description}
          </Box>
          <Box color="black" className={styles.price}>
            <NumberFormat
              value={parseInt(data.attributes.price) * state.qty}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Box>
          <SelectButton
            name={intl.formatMessage({ id: "quantity" }, { qty: "" })}
            values={values}
            valuesName={values}
            handle={handleChange}
            defaultValue="1"
            spacing={0}
          />
          <BlackButton
            id="addProduct"
            aria-label={`star ${data.attributes.name}`}
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={addProductAux}
            startIcon={<AddShoppingCartIcon id="addProduct" />}
          >
            <FormattedMessage id="buttonAdd" />
          </BlackButton>
        </Paper>
      </Card>
    </div>
  );
};

export default Product;

interface IRouterProps extends RouteComponentProps {
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: {
      data: IProduct;
    };
  };
}

const ProductScene = (props: IRouterProps): React.ComponentElement<IRouterProps, never> => (
  <Product data={props.location.state.data} />
);

const ProductSceneWithRouter = withRouter(ProductScene);

export { ProductSceneWithRouter };
