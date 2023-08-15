import React from 'react';
import styles from './styles.module.scss';
import { AsteroidsUnitValue } from '@features/asteroids-unit-filter';
import { NEOFeed, NearEarthObject } from '@shared/api';
import { AsteroidCard } from '..';

type AsteroidsListProps = {
  unit: AsteroidsUnitValue;
};

export const AsteroidList: React.FC<AsteroidsListProps> = ({ unit }) => {
  const [asteroids, setAsteroids] = React.useState<NearEarthObject[]>([]);

  React.useEffect(() => {
    fetch('mockData.json')
      .then((response) => response.json())
      .then((data: NEOFeed) => {
        const nearEarthObjects = Object.values(data.near_earth_objects).flat();
        if (nearEarthObjects) {
          setAsteroids(nearEarthObjects);
        }
      })
      .catch((error) => {
        console.error('Error fetching asteroid data:', error);
      });
  }, []);

  return (
    <ul className={styles.list}>
      {asteroids.map((asteroid) => (
        <li key={asteroid.id}>
          <AsteroidCard unit={unit} item={asteroid} />
        </li>
      ))}
    </ul>
  );
};
