import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
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
    deleteP
}: {
    id: string;
    img: string;
    title: string;
    price: number;
    quantity: number;
    deleteP: (idd: string ) => void;

}): JSX.Element => {


  const deleteProductAux = (e) => {
    
    deleteP(id);
  }

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
                    <IconButton edge="end" aria-label="delete" idd={id}  onClick={deleteProductAux}>
                      <DeleteIcon />
                    </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
}

export default ProductShoppingCart;