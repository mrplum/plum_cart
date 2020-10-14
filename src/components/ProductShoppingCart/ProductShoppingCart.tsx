import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const ProductShoppingCart = ({
    img,
    title,
    price,
    quantity
}: {
    img: string;
    title: string;
    price: number;
    quantity: number;

}): JSX.Element => {
    const classes = useStyles();
    return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt='' src={img} />
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
                ${price}
                <br/>
              </Typography>
              {`Quantity: ${quantity}`}
            </React.Fragment>
          }
        />
    </ListItem>
    );
}

export default ProductShoppingCart;