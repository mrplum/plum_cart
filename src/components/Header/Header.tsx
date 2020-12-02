import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import SelectButton from "../SelectButton";
import { LanguageContext } from "../../context";
import Sidebar from "../Sidebar";
import styles from './Header.module.css';

const Header = (): JSX.Element => {
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
        <IconButton className={styles.home}>
          <HomeIcon className={styles.icon} />
          <FormattedMessage id="homeButton" />
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
