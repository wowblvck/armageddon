import styles from './styles.module.scss';
import React from 'react';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { AsteroidList } from '@entities/asteroid/ui/';
import { CartInfo } from '@entities/cart/ui';

const AsteroidsListPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter />
        </div>
        <AsteroidList />
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsListPage;
