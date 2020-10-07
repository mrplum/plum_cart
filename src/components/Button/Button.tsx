import React from 'react';
import styles from './button.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
const Button = ({ 
  primary, 
  dark, 
  large, 
  label
} :{
    primary: boolean; 
    dark: boolean;
    large: boolean; 
    label: string;
  }): JSX.Element => {
  return (
    <button
      type="button"
      className={cx({ 
                button : true, 
                buttonPrimary : primary,
                buttonSecondary : !primary,
                buttonDark : dark,
                buttonLarge : large,
                buttonSmall : !large}
                 )}>
      {label}
    </button>
  );
}; 


export default Button;