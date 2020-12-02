import React, { useContext, useState, useEffect, useRef, useCallback } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Fab from "@material-ui/core/Fab";
import style from "./Sidebar.module.css";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import ShoppingCartList from "../List/ShoppingCartList";
import { CartContext } from "../../context";

const WIDTH = 350;

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
  const history = useHistory();

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

  const close = () => setX(-WIDTH);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      close();
    }
  };

  const handleKeypress = (event) => {
    if (event.key === 'Escape') {
      close();
    }
  }

  const handleViewCart = useCallback(() => {
    history.push('/shoppingcart')
    close();
  }, [history]);

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
          <Button variant="contained" color="primary" size="large" onClick={handleViewCart}>
            {useIntl().formatMessage({ id: "viewCart" })}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
