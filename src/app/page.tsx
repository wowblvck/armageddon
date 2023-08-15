'use client';

import styles from './styles.module.scss';
import React from 'react';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { AsteroidList } from '@entities/asteroid/ui/';
import { CartInfo } from '@entities/cart/ui';
import { NEOFeed, NearEarthObject } from '@shared/api';

const AsteroidsListPage = () => {
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
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter />
        </div>
        <AsteroidList items={asteroids} />
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsListPage;
