import { DEFAULT_BIG_SIZE, DEFAULT_DIAMETER_UNIT } from '@entities/asteroid/config';
import AddOrRemoveFromCart from '@features/add-to-cart/ui';
import { useUnit } from '@features/asteroids-unit-filter';
import { UnitConverter } from '@features/asteroids-unit-filter/helpers';
import arrowIcon from '@public/icons/arrow.svg';
import { NearEarthObject } from '@shared/api';
import AsteroidSizeIcon from '@shared/ui/asteroid-size-icon';
import DangerousAlert from '@shared/ui/dangerous-alert';
import { convertToMeters, extractValueInBrackets, formatDate } from '@shared/utils';
import calculateAverage from '@shared/utils/calculateAverage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export type AsteroidCardProps = {
  item: NearEarthObject;
  inCart?: boolean;
};

export const AsteroidCard: React.FC<AsteroidCardProps> = ({ item, inCart }) => {
  const { unitValue } = useUnit();

  const {
    close_approach_data,
    estimated_diameter: {
      [DEFAULT_DIAMETER_UNIT]: { estimated_diameter_min, estimated_diameter_max },
    },
    name,
    is_potentially_hazardous_asteroid,
    id,
  } = item;

  const averageDiameter = calculateAverage(estimated_diameter_min, estimated_diameter_max);
  const convertToM = convertToMeters(averageDiameter, DEFAULT_DIAMETER_UNIT);
  const diameter = new UnitConverter('diameter', [DEFAULT_DIAMETER_UNIT]);
  const convertedDiameter = diameter.convertValue([averageDiameter]);

  const approachDate = close_approach_data[0].close_approach_date;

  const approachDistance = Number(close_approach_data[0].miss_distance[unitValue.distance]);
  const distance = new UnitConverter('distance', [unitValue.distance]);
  const convertedDistance = distance.convertValue([approachDistance]);

  return (
    <div className={styles.container}>
      <p className={styles.date}>{formatDate(approachDate)}</p>
      <div className={styles.description}>
        <div className={styles['distance-container']}>
          <p className={styles['distance-title']}>{convertedDistance}</p>
          <Image fill className={styles.arrow} src={arrowIcon} alt="Distance" />
        </div>
        <AsteroidSizeIcon value={convertToM} bigSize={DEFAULT_BIG_SIZE} />
        <div className={styles['label-container']}>
          <Link className={styles.label} href={`/asteroid/${id}`}>
            {extractValueInBrackets(name)}
          </Link>
          <p className={styles.diameter}>Ø {convertedDiameter}</p>
        </div>
      </div>
      <div className={styles['order-container']}>
        {!inCart && <AddOrRemoveFromCart item={item} />}

        {is_potentially_hazardous_asteroid && <DangerousAlert />}
      </div>
    </div>
  );
};
