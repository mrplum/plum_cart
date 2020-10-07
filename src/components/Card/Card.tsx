import React from 'react';
import Button from '../Button';
import styles from './card.css';
import defaultImage from '../../public/images/yoda.jpg';
import classNames from 'classnames';

const cx = classNames.bind(styles);


const ProductImage = ({ img } : { img: string }) : JSX.Element => {
  if(img) {
    return <img className={cx({img:true})} src={img} alt={''} />;
  }
  return <img className={cx({img:true})} src={defaultImage} alt='' />;
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
    <div className={cx({card: true,
                        cardDark: dark})}>
      <div>
        <ProductImage img={img} />

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
        <Button primary
                dark={dark}
                large={false}
                label={"ADD MORE"}/>
      </div>
    </div>
  );
};


export default Card;