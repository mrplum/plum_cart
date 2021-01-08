import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
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
    position: "fixed",
    right: 24,
    bottom: 24,
    height: 48,
    width: 48,
  },
})(Fab);

const Sidebar = forwardRef(
  (_props, ref): JSX.Element => {
    useImperativeHandle(ref, () => {
      return { toggleMenu };
    });

    const history = useHistory();

    const [xPosition, setX] = useState(-WIDTH);

    const internalRef = useRef<HTMLDivElement>(null);

    const { cart } = useContext(CartContext);

    const toggleMenu = () => {
      if (xPosition < 0) {
        setX(0);
      } else {
        setX(-WIDTH);
      }
    };

    const close = () => setX(-WIDTH);

    const handleClickOutside = (event: { target: any }) => {
      if (internalRef.current && !internalRef.current.contains(event.target)) {
        close();
      }
    };

    const handleKeypress = (event: { key: string }) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const handleClickAddProduct = (event: { target: any }) => {
      if (event.target) {
        if (
          event.target.getAttribute("id") === "addProduct" ||
          (event.target.parentElement && event.target.parentElement.id === "addProduct")
        ) {
          setX(0);
        }
      }
    };

    const handleViewCart = useCallback(() => {
      history.push("/shoppingcart");
      close();
    }, [history]);

    useEffect(() => {
      document.addEventListener("click", handleClickAddProduct);

      return () => {
        document.removeEventListener("click", handleClickAddProduct);
      };
    }, []);

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
          <div className={style.number}>{cart.quantity !== 0 ? cart.quantity : ""}</div>
        </CartButton>
        <div
          ref={internalRef}
          className={style.sideBar}
          style={{
            transform: `translatex(${-xPosition}px)`,
            width: WIDTH,
          }}
        >
          <div className={style.cart}>
            <ShoppingCartList modifyQty={false} modifyDelete={true} list={cart.list} />
          </div>
          <div className={style.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={style.button}
              onClick={handleViewCart}
            >
              {useIntl().formatMessage({ id: "viewCart" })}
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  },
);

export default Sidebar;
