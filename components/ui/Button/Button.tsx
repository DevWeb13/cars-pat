import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  animate?: boolean;
  children?: React.ReactNode;
  home?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  type = 'button',
  disabled,
  animate,
  children,
  home,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        styles.button +
        ' ' +
        (color ? styles.btnColor : styles.btn) +
        ' ' +
        (animate ? styles.animate : '') +
        ' ' +
        (!home ? 'textBold' : 'sousTitre' + ' ' + styles.bold)
      }
      onClick={onClick}
      disabled={disabled}>
      {text}
      {children}
    </button>
  );
};

export default Button;
