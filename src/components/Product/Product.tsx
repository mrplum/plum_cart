import React, { useState, useContext } from "react";
import IDataJson from "../DataJson";
import SelectButton from "../SelectButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FormattedMessage, useIntl } from "react-intl";
import { CartContext } from "../../context";
import NumberFormat from "react-number-format";
import styles from "./Product.module.css";
import { Box, Button, Card, Paper } from "@material-ui/core";

const Product = ({ data }: { data: IDataJson }): JSX.Element => {
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
        title: data.title,
        unit_price: data.price,
        quantity: state.qty,
      },
    });
  };

  const values = [];
  for (let i = 1; i <= data.stock; i++) {
    values.push(i);
  }
  return (
    <div className={styles.root}>
      <Card className={styles.wrapper}>
        <div className={styles.product}>
          <img src={data.img} className={styles.img}></img>
        </div>
        <Paper variant="outlined" className={styles.details}>
          <Box color="text.primary" className={styles.title}>
            {data.title}
          </Box>
          <Box color="text.secondary" className={styles.description}>
            {data.description}
          </Box>
          <Box color="text.primary" className={styles.price}>
            <NumberFormat
              value={data.price * state.qty}
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
          <Button
            aria-label={`star ${data.title}`}
            variant="contained"
            color="primary"
            onClick={addProductAux}
            startIcon={<AddShoppingCartIcon />}
          >
            <FormattedMessage id="buttonAdd" />
          </Button>
        </Paper>
      </Card>
    </div>
  );
};

export default Product;
