import React from 'react';
import './button.css';
import classNames from 'classnames';

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
  const darkMode = primary&&dark ? '-dark' : '';
  const mode = primary ? `storybook-button--primary${darkMode}` : `storybook-button--secondary${darkMode}`;
  return (
    <button
      type="button"
      className={classNames('button', 
                {'buttonPrimary' : primary,
                'buttonSecundary' : !primary,
                'buttonDark' : dark,
                'buttonLarge' : large,
                'buttonSmall' : !large}
                 )}>
      {label}
    </button>
  );
};


export default Button;