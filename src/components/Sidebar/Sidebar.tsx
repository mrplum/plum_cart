import React, { useContext, useState, useEffect, useRef } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import style from "./Sidebar.module.css";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import { CartContext } from "../../context";

const WIDTH = 300;

const CartButton = withStyles({
  root: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    height: 48,
    width: 48,
  },
})(Fab);

const Sidebar = (): JSX.Element => {
  const [xPosition, setX] = useState(-WIDTH);

  const ref = useRef(null);

  const { state } = useContext(CartContext);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-WIDTH);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setX(-WIDTH);
    }
  };

  const handleKeypress = (event) => {
    if (event.key === 'Escape') {
      setX(-WIDTH);
    }
  }

  useEffect(() => {
    setX(0);
  }, [state]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeypress);

    setX(-WIDTH);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeypress);
    };
  }, []);

  return (
    <React.Fragment>
      <CartButton onClick={toggleMenu} variant="extended">
        <AddShoppingCartIcon />
        <div className={style.number}>{state.quantity !== 0 ? state.quantity : ""}</div>
      </CartButton>
      <div
        ref={ref}
        className={style.sideBar}
        style={{
          transform: `translatex(${-xPosition}px)`,
          width: WIDTH,
        }}
      >
        <div className={style.cart}>
          <ShoppingCartList />
        </div>
        <div className={style.button}>
          <Link to={{ pathname: "/shoppingcart" }}>
            <Button variant="contained" color="default">
              {useIntl().formatMessage({ id: "viewCart" })}
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
