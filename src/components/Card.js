import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './Button';
import './card.css';
import image from '../image-not-found.png';


/**
 * Primary UI component for user interaction
 */
export const Card = ({ backgroundColor,title,price, img, ...props }) => {
  return (
    <div className="card">
        <img className='img' src={img} alt={''} />
        <h2 className='title'> {title} </h2>
        <h1 className="price">${price}</h1>
      <div className='buttons'>
        <Button primary={false} 
                backgroundColor={'transparent'}
                size = {'small'}
                label={"DETAILS"}/>
        <Button primary={true} 
                backgroundColor={'transparent'}
                size = {'small'}
                label={"ADD MORE"}/>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * image to show
   */
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
  backgroundColor: null,
  title: 'imagen no encontrada ',
  img: image,
  price: 0.0
};

