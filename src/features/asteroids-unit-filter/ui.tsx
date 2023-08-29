'use client';

import classNames from 'classnames';
import React from 'react';

import { UnitsByType, UnitsByTypeKey } from './config';
import { asteroidsUnits, defaultUnitValues } from './config';
import { useUnit } from './model';
import styles from './styles.module.scss';

type AsteroidsUnitFilterProps<T extends UnitsByTypeKey> = {
  type: T;
  units: UnitsByType[T][];
};

export const AsteroidsUnitFilter = <T extends UnitsByTypeKey>({
  type,
  units,
}: AsteroidsUnitFilterProps<T>) => {
  const { setUnitValue, unitValue } = useUnit();

  const filteredUnits = units
    ? asteroidsUnits[type].filter((unit) => units.includes(unit.value))
    : asteroidsUnits[type];

  const defaultUnitIndex = filteredUnits.findIndex(
    (unit) => unit.value === defaultUnitValues[type]
  );
  if (defaultUnitIndex !== -1) {
    const defaultUnit = filteredUnits.splice(defaultUnitIndex, 1);
    filteredUnits.unshift(...defaultUnit);
  }

  return (
    <ul className={styles['values-container']}>
      {filteredUnits.map((unit, idx) => (
        <React.Fragment key={unit.id}>
          <li>
            <button
              className={classNames(styles.unit, {
                [styles.active]: unitValue[type] === unit.value,
              })}
              onClick={() => setUnitValue(type, unit.value)}
            >
              {unit.label}
            </button>
          </li>
          {idx !== filteredUnits.length - 1 && <hr className={styles.hr} />}
        </React.Fragment>
      ))}
    </ul>
  );
};
