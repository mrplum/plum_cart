import React, { useContext } from "react";
import styles from "./Card.module.css";
import defaultImage from "../../public/images/image-not-found.png";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";
import { CartContext } from "../../context";

const ProductImage = ({ img }: { img: string }): JSX.Element => {
  if (img) {
    return <img className={classNames(styles.img)} src={img} alt={""} />;
  }
  return <img className={classNames(styles.img)} src={defaultImage} alt="" />;
};

/**
 * Primary UI component for user interaction
 */
const Card = ({
  id,
  dark,
  title,
  price,
  img,
}: {
  id: string;
  dark: boolean;
  title: string;
  price: number;
  img?: string;
}): JSX.Element => {
  const { dispatch } = useContext(CartContext);
  const addProduct = (e) => {
    e.preventDefault();
    const p = { id: id, price: price, qty: 1 };
    dispatch({ type: "addProduct", payload: p });
  };
  return (
    <div
      className={classNames(styles.card, {
        [styles.cardDark]: dark,
      })}
    >
      <div>
        <ProductImage img={img} />
        <h2
          className={classNames(styles.title, {
            [styles.titleDark]: dark,
          })}
        >
          {title}
        </h2>
        <h1
          className={classNames(styles.price, {
            [styles.priceDark]: dark,
          })}
        >
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </h1>
      </div>
      <div className={classNames(styles.buttons)}>
        <IconButton
          aria-label={`star ${title}`}
          color={"default"}
          onClick={addProduct}
        >
          <AddShoppingCartIcon />
          <p>
            <FormattedMessage id="buttonAdd" />
          </p>
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
