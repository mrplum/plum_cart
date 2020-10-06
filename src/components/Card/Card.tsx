import React from 'react';
import Button from '../Button';
//import styles from './card.css';
import './card.css';
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
    <div className={classNames('card',{"cardDark": dark})}>
      <div>
        <img className='img' src={img} alt={''} />
        
        <h2 className={classNames('title', 
        {'titleDark': dark}
        )}> {title} </h2>
        <h1 className={classNames('price', {"priceDark" : dark})}>${price}</h1>
        </div>
      <div className='buttons'>
        <Button primary={false}
                dark={false}
                large={false}
                label={"DETAILS"}/>
        <Button primary={true} 
                dark={dark}
                large={false}
                label={"ADD MORE"}/>
      </div>
    </div>
  );
};


export default Card;