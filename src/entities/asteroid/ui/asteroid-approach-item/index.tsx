import { CloseApproachData } from '@shared/api';
import styles from './styles.module.scss';
import { useUnit } from '@features/asteroids-unit-filter';
import { localeDate, translateOrbit } from '@shared/utils';
import { UnitConverter } from '@features/asteroids-unit-filter/helpers';

type AsteroidApproachItemProps = {
  item: CloseApproachData;
};

export const AsteroidApproachItem: React.FC<AsteroidApproachItemProps> = ({ item }) => {
  const { close_approach_date_full, miss_distance, relative_velocity, orbiting_body } = item;

  const { unitValue } = useUnit();

  const distance = new UnitConverter('distance', [unitValue.distance]);
  const convertedDistance = distance.convertValue([Number(miss_distance[unitValue.distance])]);

  const velocity = new UnitConverter('velocity', [unitValue.velocity]);
  const convertedVelocity = velocity.convertValue([Number(relative_velocity[unitValue.velocity])]);

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>
        Время сближения: {localeDate(close_approach_date_full)}
      </summary>

      <ul className={styles.container}>
        <li>
          <p className={styles.label}>
            Орбита: <span>{translateOrbit(orbiting_body)}</span>
          </p>
        </li>
        <li>
          <p className={styles.label}>
            Дистанция: <span>{convertedDistance}</span>
          </p>
        </li>
        <li>
          <p className={styles.label}>
            Скорость: <span>{convertedVelocity}</span>
          </p>
        </li>
      </ul>
    </details>
  );
};
