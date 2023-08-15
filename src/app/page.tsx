'use client';
import styles from './styles.module.scss';
import React from 'react';
import { AsteroidsUnitValue, AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { AsteroidList } from '@entities/asteroid/ui/';
import { CartInfo } from '@entities/cart/ui';

const AsteroidsListPage = () => {
  const [unit, setUnit] = React.useState<AsteroidsUnitValue>('kilometers');

  const handleUnitChange = (newUnit: AsteroidsUnitValue) => {
    setUnit(newUnit);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter value={unit} onUnitChange={handleUnitChange} />
        </div>
        <AsteroidList unit={unit} />
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsListPage;
