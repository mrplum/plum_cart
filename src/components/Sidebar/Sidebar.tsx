import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import style from "./Sidebar.module.css";
import { withStyles } from "@material-ui/core/styles";

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

const Sidebar = ({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: JSX.Element;
}): JSX.Element => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };
  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <React.Fragment>
      <div
        className={style.sideBar}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <CartButton
          color={"default"}
          onClick={toggleMenu}
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          <AddShoppingCartIcon />
        </CartButton>
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
