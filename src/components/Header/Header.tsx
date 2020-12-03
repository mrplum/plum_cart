import React, { useContext, useRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import SelectButton from "../SelectButton";
import { CartContext, LanguageContext } from "../../context";
import Sidebar from "../Sidebar";
import styles from "./Header.module.css";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useTheme, withStyles } from "@material-ui/core";

const Header = (): JSX.Element => {
  const theme = useTheme();

  const intl = useIntl();

  const { toggleLocale, locale, languages } = useContext(LanguageContext);
  const { cart } = useContext(CartContext);
  
  const sidebar = useRef<any>();
  const handleClick = () => {
    if (sidebar.current) {
      sidebar.current.toggleMenu();
    }
  }

  const CartIconButton = withStyles({
    root: {
      marginLeft: 12,
      marignRight: 12,
      width: 50,
      height: 50,
      
    }
  })(IconButton);

  const languagesNames = JSON.parse(intl.formatMessage({ id: "languages" }));

  return (
    <div className={style.root}>
      <Sidebar ref={sidebar}/>
      <div className={styles.homeWrapper}>
        <Link
          to={{
            pathname: "/",
          }}
        >
          <IconButton className={styles.home}>
            <HomeIcon className={styles.icon} />
            <FormattedMessage id="homeButton" />
          </IconButton>
        </Link>
      </div>
      <div className={style.right}>
        <div className={style.language}>
          <SelectButton
            name={intl.formatMessage({ id: "language" })}
            values={languages}
            valuesName={languagesNames}
            handle={toggleLocale}
            defaultValue={locale}
          />
        </div>
        <CartIconButton onClick={handleClick}>
          <ShoppingCart htmlColor="var(--light)" />
        </CartIconButton>
      </div>
    </div>
  );
};

export default Header;
