import React, { useContext } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { FormattedMessage } from "react-intl";
import Divider from "@material-ui/core/Divider";
import NumberFormat from "react-number-format";
import { CartContext } from "../../context/CartContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

const ProductShoppingCart = ({
  id,
  img,
  title,
  unit_price,
  quantity,
}: {
  id: string;
  img: string;
  title: string;
  unit_price: number;
  quantity: number;
}): JSX.Element => {
  const { dispatch } = useContext(CartContext);
  const classes = useStyles();
  const deleteProduct = () => {
    dispatch({ type: "deleteProduct", payload: { id: id } });
  };
  return (
    <div>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <b>{title}</b>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <NumberFormat
                  value={unit_price * quantity}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <br />
              </Typography>
              <FormattedMessage id="quantity" values={{ qty: quantity }} />
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            id={id}
            onClick={deleteProduct}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" component="li" />
    </div>
  );
};

export default ProductShoppingCart;
