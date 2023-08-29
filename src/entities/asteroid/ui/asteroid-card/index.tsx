'use client';

import { DEFAULT_BIG_SIZE, DEFAULT_DIAMETER_UNIT } from '@entities/asteroid/config';
import AddOrRemoveFromCart from '@features/add-to-cart/ui';
import { useUnit } from '@features/asteroids-unit-filter';
import { UnitConverter } from '@features/asteroids-unit-filter/helpers';
import arrowIcon from '@public/icons/arrow.svg';
import { type NearEarthObjectFull } from '@shared/api';
import AsteroidSizeIcon from '@shared/ui/asteroid-size-icon';
import DangerousAlert from '@shared/ui/dangerous-alert';
import { convertToMeters, extractValueInBrackets, formatDate } from '@shared/utils';
import calculateAverage from '@shared/utils/calculateAverage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export type AsteroidCardProps = {
  item: NearEarthObjectFull;
  showOrderButton: boolean;
};

export const AsteroidCard: React.FC<AsteroidCardProps> = ({ item, showOrderButton }) => {
  const { unitValue } = useUnit();

  const {
    date,
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
  const [convertedDiameter] = diameter.convertValue([averageDiameter]);

  const approachInfo = close_approach_data.find((item) => item.close_approach_date === date);

  const approachDistance = approachInfo && Number(approachInfo.miss_distance[unitValue.distance]);
  const distance = new UnitConverter('distance', [unitValue.distance]);
  const [convertedDistance] = distance.convertValue([approachDistance ? approachDistance : 0]);

  return (
    <div className={styles.container}>
      {approachInfo && (
        <p className={styles.date}>{formatDate(approachInfo.close_approach_date)}</p>
      )}
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
        {showOrderButton && <AddOrRemoveFromCart item={item} />}

        {is_potentially_hazardous_asteroid && <DangerousAlert />}
      </div>
    </div>
  );
};
