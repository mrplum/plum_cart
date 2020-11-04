import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import SelectButton from "../SelectButton";
import { LanguageContext } from "../../context";
import Sidebar from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  home: {
    width: 100,
    height: 70,
    float: "none",
    position: "absolute",
    right: "50%",
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyles();
  const { toggleLocale, locale, languages } = useContext(LanguageContext);
  const intl = useIntl();
  const languagesNames = JSON.parse(intl.formatMessage({ id: "languages" }));
  return (
    <div className={style.root}>
      <Sidebar />
      <Link
        to={{
          pathname: "/",
        }}
      >
        <IconButton className={classes.home} color={"default"}>
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
