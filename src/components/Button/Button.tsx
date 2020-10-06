import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({ 
  primary, 
  dark, 
  backgroundColor, 
  size, 
  label
} :{
    primary: boolean; 
    dark: boolean;
    backgroundColor: string;
    size: number; 
    label: string;
  }): JSX.Element => {
  const darkMode = primary&&dark ? '-dark' : '';
  const mode = primary ? `storybook-button--primary${darkMode}` : `storybook-button--secondary${darkMode}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};


export default Button;