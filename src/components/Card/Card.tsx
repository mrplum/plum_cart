import React from 'react';
import Button from '../Button';
import styles from './Card.module.css';

//import image from '../../image-not-found.png';
import classNames from 'classnames';


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
        <img className={classNames(styles.img)} src={img} alt={''} /> 
        
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
        <Button primary={false}
                dark={false}
                large={false}
                label={"DETAILS"}/>
        <Button primary 
                dark={dark}
                large={false}
                label={"ADD MORE"}/>
      </div>
    </div>
  );
};


export default Card;