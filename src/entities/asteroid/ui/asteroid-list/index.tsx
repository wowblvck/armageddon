'use client';

import { NEOFeed, NearEarthObject } from '@shared/api';
import React from 'react';
import { AsteroidCard } from '../asteroid-card';
import styles from './styles.module.scss';

export const AsteroidList = () => {
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
          <AsteroidCard item={asteroid} />
        </li>
      ))}
    </ul>
  );
};
