import { convertedUnit, extractValueInBrackets, formatDate } from '@shared/utils';
import arrowIcon from '@public/icons/arrow.svg';
import bigIcon from '@public/icons/asteroids/big.png';
import smallIcon from '@public/icons/asteroids/small.png';
import warningIcon from '@public/icons/warning.svg';
import Image from 'next/image';
import React from 'react';
import { NearEarthObject } from '@shared/api';
import { AsteroidsUnitValue } from '@features/asteroids-unit-filter';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/button';
import Link from 'next/link';

export type AsteroidCardProps = {
  unit: AsteroidsUnitValue;
  item: NearEarthObject;
  inCart?: boolean;
};

export const AsteroidCard: React.FC<AsteroidCardProps> = ({ unit, item, inCart }) => {
  const { close_approach_data, estimated_diameter, name, is_potentially_hazardous_asteroid, id } =
    item;
  const {
    meters: { estimated_diameter_max, estimated_diameter_min },
  } = estimated_diameter;

  const averageDiameter = (estimated_diameter_min + estimated_diameter_max) / 2;

  const missDistanceValue = close_approach_data.find((data) => data.orbiting_body === 'Earth')
    ?.miss_distance[unit];

  return (
    <div className={styles.container}>
      <p className={styles.date}>{formatDate(close_approach_data[0].close_approach_date)}</p>
      <div className={styles.description}>
        <div className={styles['distance-container']}>
          <p className={styles['distance-title']}>
            {missDistanceValue ? convertedUnit(unit, parseInt(missDistanceValue)) : 'Неизвестно'}
          </p>
          <Image fill className={styles.arrow} src={arrowIcon} alt="Distance" />
        </div>
        <Image src={averageDiameter > 150 ? smallIcon : bigIcon} alt="Asteroid" />
        <div className={styles['label-container']}>
          <Link className={styles.label} href={`/asteroid/${id}`}>
            {extractValueInBrackets(name)}
          </Link>
          <p className={styles.diameter}>Ø {averageDiameter.toFixed()} м</p>
        </div>
      </div>
      <div className={styles['order-container']}>
        {!inCart && (
          <Button size="small" variant="order">
            Заказать
          </Button>
        )}

        {is_potentially_hazardous_asteroid && (
          <div className={styles['dangerous-container']}>
            <Image src={warningIcon} alt="Опасный астероид" />
            <p className={styles.dangerous}>&nbsp;Опасен</p>
          </div>
        )}
      </div>
    </div>
  );
};
