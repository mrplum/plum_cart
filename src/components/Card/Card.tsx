import React from 'react';
import Button from '../Button';
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
  const mode = dark ? "-dark" : "";
  return (
    <div className={classNames({"card-dark": mode})}>
      <div>
        <img className='img' src={img} alt={''} />
        
        <h2 className={classNames({
          'title': !mode,
          'title-dark': mode
        }
        )}> {title} </h2>
        <h1 className={[`price${mode}`]}>${price}</h1>
        </div>
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


export default Card;