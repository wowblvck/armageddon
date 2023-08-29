import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'large';
  variant: 'sent' | 'order' | 'cart';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, size, variant, ...props }) => {
  const btnClassNames = classNames(styles.btn, {
    [styles['btn-small']]: size === 'small',
    [styles['btn-order']]: variant === 'order',
    [styles['btn-cart']]: variant === 'cart',
  });

  return (
    <button className={btnClassNames} type="button" {...props}>
      {children}
    </button>
  );
};
