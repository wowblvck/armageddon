import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface SpinProps extends React.HTMLProps<HTMLSpanElement> {}

const Spin: React.FC<SpinProps> = ({ ...props }) => {
  const { className } = props;
  return <span {...props} className={classNames(styles.loader, className)}></span>;
};

export default Spin;
