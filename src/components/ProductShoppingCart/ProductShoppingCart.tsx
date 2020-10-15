import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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
    id,  
    img,
    title,
    price,
    quantity,
}: {
    id: string;
    img: string;
    title: string;
    price: number;
    quantity: number;

}): JSX.Element => {

    const deleteProduct = (e) => {
        console.log(id);
        const list = localStorage.getItem('shoppingcart');
        let aux = JSON.parse(list);
        let aux2= aux.filter(p => p.id !== id);
       //aux.filter(p => p.id !== id);
        console.log(aux2);
        localStorage.setItem('shoppingcart', JSON.stringify(aux2));
    } ;

    const classes = useStyles();
    console.log(id);
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
        <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete"  onClick={deleteProduct}>
                      <DeleteIcon />
                    </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
}

export default ProductShoppingCart;