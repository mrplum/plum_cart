import React from 'react';
import Button from '../Button';
import styles from './Card.module.css';
import defaultImage from '../../public/images/image-not-found.png';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductImage = ({ img } : { img: string }) : JSX.Element => {
  if(img) {
    return <img className={classNames(styles.img)} src={img} alt={''} />;
  }
  return <img className={classNames(styles.img)} src={defaultImage} alt='' />;
}

/**
 * Primary UI component for user interaction
 */
const Card = ({
  dark,
  title,
  price,
  img
}: {
  dark: boolean;
  title: string;
  price: number;
  img?: string;
}) : JSX.Element => {
  return (
    <div className={classNames(styles.card,{
                     [styles.cardDark]: dark})}>
      <div>
        <ProductImage img={img} />
        <h2 className={classNames(styles.title,{ 
                          [styles.titleDark]: dark})}>
           {title} 
        </h2>
        <h1 className={classNames(styles.price,{
                           [styles.priceDark] : dark})}>
            ${price}
        </h1>
      </div>
      <div className={classNames(styles.buttons)}> 

        <IconButton   aria-label={`star ${title}`} color={"primary"} classes={styles.icon}>
                    <AddShoppingCartIcon />
                    <p>Add</p>
        </IconButton>
      </div>
    </div>
  );
};


export default Card;