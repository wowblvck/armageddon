'use client';

import classNames from 'classnames';
import React from 'react';
import { asteroidsUnits } from './config';
import { useUnit } from './store';
import styles from './styles.module.scss';

export const AsteroidsUnitFilter = () => {
  const { unitValue, setUnitValue } = useUnit();

  return (
    <ul className={styles['values-container']}>
      {asteroidsUnits.map((unit, idx) => (
        <React.Fragment key={unit.id}>
          <li>
            <button
              className={classNames(styles.unit, { [styles.active]: unitValue === unit.value })}
              onClick={() => setUnitValue(unit.value)}
            >
              {unit.label}
            </button>
          </li>
          {idx !== asteroidsUnits.length - 1 && <hr className={styles.hr} />}
        </React.Fragment>
      ))}
    </ul>
  );
};
