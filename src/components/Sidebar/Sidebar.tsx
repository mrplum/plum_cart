import React, { useContext, useState, useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import style from "./Sidebar.module.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import { CartContext } from "../../context";

const CartButton = withStyles({
  root: {
    height: 50,
    width: 10,
    position: "absolute",
    outline: "none",
    zIndex: 1,
    borderLeft: 0,
  },
})(IconButton);

const Sidebar = (): JSX.Element => {
  const width = 250;
  const [xPosition, setX] = useState(-width);
  const ref = React.useRef(null);
  const { list, quantity } = useContext(CartContext);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setX(-width);
    }
  };
  useEffect(() => {
    setX(0);
  }, [list]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setX(-width);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={style.sideBar}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: "0vh",
        }}
      >
        <CartButton
          color={"default"}
          onClick={toggleMenu}
          style={{
            transform: `translate(${xPosition === -250 ? 255 : 205}px, -10vh)`,
          }}
        >
          <AddShoppingCartIcon />
          <div className={style.number}>{quantity !== 0 ? quantity : ""}</div>
        </CartButton>
        <div className={style.children}>
          <div className={style.cart}>
            <ShoppingCartList />
          </div>
          <div className={style.button}>
            <Link to={{ pathname: "/shoppingcart" }}>
              <Button
                label={useIntl().formatMessage({ id: "viewCart" })}
                primary={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
