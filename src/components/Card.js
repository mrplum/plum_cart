import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './Button';
import './card.css';
import image from '../image-not-found.png';


/**
 * Primary UI component for user interaction
 */
export const Card = ({ backgroundColor, img, ...props }) => {
  return (
    <div className="center">
      <div>
        <img src={img} alt={''} />
      </div>
      <div>
        <Button primary={false} 
                backgroundColor={'transparent'}
                label={"DETAILS"}/>
        <Button primary={true} 
                backgroundColor={'transparent'}
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

};

Card.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  img: image,
};

