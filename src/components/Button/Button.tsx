import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary,
  dark,
  large,
  label,
}: {
  primary: boolean;
  dark: boolean;
  large: boolean;
  label: string;
}): JSX.Element => {
  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles.buttonPrimary]: primary,
        [styles.buttonSecondary]: !primary,
        [styles.buttonDark]: dark,
        [styles.buttonLarge]: large,
        [styles.buttonSmall]: !large,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
