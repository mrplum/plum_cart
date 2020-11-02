import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import SelectButton from "../SelectButton";
import { AppContext } from "../../context";
import ShoppingCart from "../ShoppingCart";
import Sidebar from "../Sidebar";

const Header = (): JSX.Element => {
  const { toggleLocale, locale, languages } = useContext(AppContext);
  const intl = useIntl();
  const languagesNames = JSON.parse(intl.formatMessage({ id: "languages" }));
  return (
    <div className={style.root}>
      <Sidebar width={250} height={200}>
        <ShoppingCart />
      </Sidebar>
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
          name={intl.formatMessage({ id: "language" })}
          values={languages}
          valuesName={languagesNames}
          handle={toggleLocale}
          defaultValue={locale}
        />
      </div>
    </div>
  );
};

export default Header;
