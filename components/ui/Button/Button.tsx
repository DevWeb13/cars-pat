import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <button
      className={
        styles.button +
        ' ' +
        'textBold' +
        ' ' +
        (color ? styles.btnColor : styles.btn)
      }
      onClick={onClick}>
      {text}
      <div />
    </button>
  );
};

export default Button;
