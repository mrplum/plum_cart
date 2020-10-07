import React from 'react';
import Button from '../Button';
import styles from './card.css';
//import image from '../../image-not-found.png';
import classNames from 'classnames';

const cx = classNames.bind(styles);

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
    <div className={cx({card: true,
                        cardDark: dark})}>
      <div>
        <img className={cx({img:true})} src={img} alt={''} />  {/*same here */}
        
        <h2 className={cx({title: true, 
                          titleDark: dark})}>
           {title} 
        </h2>
        <h1 className={cx({price: true,
                           priceDark : dark})}>
            ${price}
        </h1>
      </div>
      <div className={cx({buttons:true})}> {/* it doesn't work with className={styles.buttons} :( */}
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