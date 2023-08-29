import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: 'large' | 'small';
  variant: 'cart' | 'order' | 'sent';
}

export const Button: React.FC<ButtonProps> = ({ children, size, variant, ...props }) => {
  const btnClassNames = classNames(styles.btn, {
    [styles['btn-cart']]: variant === 'cart',
    [styles['btn-order']]: variant === 'order',
    [styles['btn-small']]: size === 'small',
  });

  return (
    <button className={btnClassNames} type="button" {...props}>
      {children}
    </button>
  );
};
