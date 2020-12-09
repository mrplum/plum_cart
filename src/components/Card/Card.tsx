import React, { useContext } from "react";
import styles from "./Card.module.css";
import defaultImage from "../../public/images/image-not-found.png";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
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
    const p = { id: id, title: title, unit_price: price, quantity: 1 };
    dispatch({ type: "addProduct", payload: p });
  };
  return (
    <div
      className={classNames(styles.card, {
        [styles.cardDark]: dark,
      })}
    >
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
      <Button
        id="addProduct"
        variant="outlined"
        className={styles.button}
        aria-label={`star ${title}`}
        onClick={addProduct}
      >
        <AddShoppingCartIcon />
        <FormattedMessage id="buttonAdd" />
      </Button>
    </div>
  );
};

export default Card;
