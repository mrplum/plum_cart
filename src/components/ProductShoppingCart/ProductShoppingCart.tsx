import React from "react";
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
import NumberFormat from "react-number-format";

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
  price,
  quantity,
  deleteP,
}: {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
  deleteP: (id: string) => void;
}): JSX.Element => {
  const classes = useStyles();
  const deleteProduct = () => {
    deleteP(id);
  };
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="" src={img} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              <NumberFormat
                value={price}
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
  );
};

export default ProductShoppingCart;
