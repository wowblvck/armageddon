import { DEFAULT_BIG_SIZE } from '@entities/asteroid/config';
import { AsteroidsUnitFilter, useUnit } from '@features/asteroids-unit-filter';
import { UnitConverter } from '@features/asteroids-unit-filter/helpers';
import { NearEarthObject } from '@shared/api';
import AsteroidSizeIcon from '@shared/ui/asteroid-size-icon';
import { convertToMeters, localeDate, translateOrbit } from '@shared/utils';
import calculateAverage from '@shared/utils/calculateAverage';
import React from 'react';
import styles from './styles.module.scss';
import { AsteroidApproachList } from '../asteroid-approach-list';

type AsteroidDetailProps = {
  item: NearEarthObject;
};

export const AsteroidDetail: React.FC<AsteroidDetailProps> = ({ item }) => {
  const { unitValue } = useUnit();

  const {
    close_approach_data,
    absolute_magnitude_h,
    estimated_diameter: {
      [unitValue.diameter]: { estimated_diameter_min, estimated_diameter_max },
    },
  } = item;

  const averageDiameter = calculateAverage(estimated_diameter_min, estimated_diameter_max);
  const convertedToM = convertToMeters(averageDiameter, unitValue.diameter);

  const diameter = new UnitConverter('diameter', [unitValue.diameter]);
  const convertedDiameter = diameter.convertValue([averageDiameter]);

  return (
    <div className={styles.container}>
      <div className={styles['data-container']}>
        <p className={styles.title}>Данные</p>
        <div className={styles['data-subcontainer']}>
          <p className={styles['data-label']}>Диаметр</p>
          <AsteroidsUnitFilter type="diameter" units={['kilometers', 'meters', 'miles', 'feet']} />
          <div className={styles['diameter-description']}>
            <AsteroidSizeIcon value={convertedToM} bigSize={DEFAULT_BIG_SIZE} />
            <p className={styles['data-title']}>Ø {convertedDiameter}</p>
          </div>
        </div>
        <div className={styles['data-subcontainer']}>
          <p className={styles['data-label']}>Абсолютная магнитуда</p>
          <p className={styles['data-title']}>{absolute_magnitude_h.toFixed(1)}</p>
        </div>
      </div>

      <div className={styles['data-container']}>
        <p className={styles.title}>Сближения</p>
        <div className={styles['data-subcontainer']}>
          <p className={styles['data-label']}>Дистанция</p>
          <AsteroidsUnitFilter
            type="distance"
            units={['kilometers', 'lunar', 'astronomical', 'miles']}
          />
        </div>
        <div className={styles['data-subcontainer']}>
          <p className={styles['data-label']}>Скорость</p>
          <AsteroidsUnitFilter
            type="velocity"
            units={['kilometers_per_hour', 'kilometers_per_second', 'miles_per_hour']}
          />
        </div>
        <div className={styles['data-subcontainer']}>
          <AsteroidApproachList data={close_approach_data} />
        </div>
      </div>
    </div>
  );
};
