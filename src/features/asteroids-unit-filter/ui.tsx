import styles from './styles.module.scss';
import classNames from 'classnames';
import { AsteroidsUnitValue, asteroidsUnits } from './config';
import React from 'react';

type AsteroidsUnitFilterProps = {
  value: AsteroidsUnitValue;
  onUnitChange: (newUnit: AsteroidsUnitValue) => void;
};

export const AsteroidsUnitFilter: React.FC<AsteroidsUnitFilterProps> = ({
  value,
  onUnitChange,
}) => {
  const handleClick = React.useCallback(
    (selectedUnit: AsteroidsUnitValue) => {
      onUnitChange(selectedUnit);
    },
    [onUnitChange]
  );

  return (
    <ul className={styles['values-container']}>
      {asteroidsUnits.map((unit, idx) => (
        <React.Fragment key={unit.id}>
          <li>
            <button
              className={classNames(styles.unit, { [styles.active]: value === unit.value })}
              onClick={() => handleClick(unit.value)}
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
