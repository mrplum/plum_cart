import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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
import {
  Box,
  useTheme,
  withStyles,
  makeStyles,
  createStyles,
  Theme,
  fade,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "40%",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      fontFamily: "Arial, sans-serif",
      letterSpacing: "0.6px",
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "51ch",
      },
    },
  }),
);

const Header = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const intl = useIntl();

  const [search, setSearch] = useState<string>("");

  const { toggleLocale, locale, languages } = useContext(LanguageContext);
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const sidebar = useRef<any>();
  const handleClick = () => {
    if (sidebar.current) {
      sidebar.current.toggleMenu();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = (event: { key: string }) => {
    if (event.key === "Enter") {
      history.push(`/search?prod=${search}`);
    }
  };

  const CartIconButton = withStyles({
    root: {
      marginLeft: 12,
      marignRight: 12,
      width: 50,
      height: 50,
      fontSize: 20,
    },
  })(IconButton);

  const languagesNames = JSON.parse(intl.formatMessage({ id: "languages" }));

  return (
    <div className={style.root}>
      <Sidebar ref={sidebar} />
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
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon className={styles.home} />
        </div>
        <InputBase
          placeholder={intl.formatMessage({ id: "search" })}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={search}
          onChange={handleChange}
          onKeyDown={handleSearch}
          className={styles.home}
          inputProps={{ "aria-label": "search" }}
        />
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
          <Box color="text.hint">{cart.quantity !== 0 ? cart.quantity : ""}</Box>
        </CartIconButton>
      </div>
    </div>
  );
};

export default Header;
