import React, { useContext } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import SelectButton from "../SelectButton";
import { AppContext } from "../../context";

const Header = (): JSX.Element => {
  const valuesName = [];
  valuesName[0] = useIntl().formatMessage({ id: "spanish" });
  valuesName[1] = useIntl().formatMessage({ id: "english" });
  const values = [];
  values[0] = "es-AR";
  values[1] = "en-US";
  const { toggleLocale, locale } = useContext(AppContext);
  console.log(toggleLocale, locale);
  return (
    <div className={style.root}>
      <Link
        to={{
          pathname: "/shoppingcart",
        }}
      >
        <IconButton color={"default"}>
          <AddShoppingCartIcon />
          <p>
            <FormattedMessage id="viewCart" />
          </p>
        </IconButton>
      </Link>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <IconButton color={"default"}>
          <HomeIcon />
          <p>
            <FormattedMessage id="homeButton" />
          </p>
        </IconButton>
      </Link>
      <div className={style.language}>
        <SelectButton
          name={useIntl().formatMessage({ id: "language" })}
          values={values}
          valuesName={valuesName}
          handle={toggleLocale}
          defaultValue={locale}
        />
      </div>
    </div>
  );
};

export default Header;
