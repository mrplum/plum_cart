import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { FormattedMessage, useIntl } from "react-intl";
import Divider from "@material-ui/core/Divider";
import NumberFormat from "react-number-format";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductShoppingCart.module.css";
import SelectButton from "../SelectButton";

const ProductShoppingCart = ({
  id,
  img,
  title,
  unit_price,
  quantity,
  stock,
  modifyQty,
}: {
  id: string;
  img: string;
  title: string;
  unit_price: number;
  quantity: number;
  stock: number;
  modifyQty: boolean;
}): JSX.Element => {
  const { dispatch } = useContext(CartContext);
  const deleteProduct = () => {
    dispatch({ type: "deleteProduct", payload: { id: id } });
  };

  const values = [];
  for (let i = 1; i <= stock; i++) {
    values.push(i);
  }

  const handleChange = (value) => {
    dispatch({
      type: "changeQuantity",
      payload: { id: id, quantity: parseInt(value) },
    });
  };

  return (
    <div>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={<b>{title}</b>}
          secondary={
            modifyQty ? (
              ""
            ) : (
              <FormattedMessage id="quantity" values={{ qty: quantity }} />
            )
          }
        />

        <div className={styles.remove}>
          <React.Fragment>
            {modifyQty ? (
              <SelectButton
                name={useIntl().formatMessage({ id: "quantity" }, { qty: "" })}
                values={values}
                valuesName={values}
                handle={handleChange}
                defaultValue={quantity}
                spacing={0}
              />
            ) : (
              <div />
            )}
          </React.Fragment>
          <IconButton aria-label="delete" id={id} onClick={deleteProduct}>
            <DeleteIcon />
          </IconButton>
        </div>
        <ListItemSecondaryAction>
          <Typography color="primary">
            <b>
              <NumberFormat
                value={unit_price * quantity}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
            </b>
            <br />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" component="li" />
    </div>
  );
};

export default ProductShoppingCart;
