import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  type = 'button',
  disabled,
  animate,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        styles.button +
        ' ' +
        'textBold' +
        ' ' +
        (color ? styles.btnColor : styles.btn) +
        ' ' +
        (animate ? styles.animate : '')
      }
      onClick={onClick}
      disabled={disabled}>
      {text}
      <div />
    </button>
  );
};

export default Button;
