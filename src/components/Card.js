import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './Button';
import './card.css';
import image from '../image-not-found.png';


/**
 * Primary UI component for user interaction
 */
export const Card = ({ dark,title,price, img, ...props }) => {
  const mode = dark ? "-dark" : "";
  return (
    <div className={[`card${mode}`]}>
        <img className='img' src={img} alt={''} />
        <h2 className={[`title${mode}`]}> {title} </h2>
        <h1 className={[`price${mode}`]}>${price}</h1>
      <div className='buttons'>
        <Button primary={false}
                backgroundColor={'transparent'}
                size = {'small'}
                label={"DETAILS"}/>
        <Button primary={true} 
                dark={dark}
                backgroundColor={'transparent'}
                size = {'small'}
                label={"ADD MORE"}/>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * Dark mode
   */
  dark: PropTypes.bool,
  /**
   * image to show
   */
  //help :(
  /*
  * image's title
  */
  title: PropTypes.string.isRequired,
  /*
  * price
  */
  price: PropTypes.number.isRequired
};

Card.defaultProps = {
  dark: false,
  title: 'imagen no encontrada ',
  img: image,
  price: 0.0
};

