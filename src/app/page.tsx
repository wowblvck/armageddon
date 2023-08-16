'use client';

import { NearEarthObject, nasaApi } from '@/shared/api';
import { AsteroidList } from '@entities/asteroid/ui/';
import { CartInfo } from '@entities/cart/ui';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import Spin from '@shared/ui/spin';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

const AsteroidsPage = () => {
  const { ref, inView } = useInView({ threshold: 1 });

  const currentDate = moment();

  const [date, setDate] = React.useState(currentDate);

  const [items, setItems] = React.useState<NearEarthObject[]>([]);

  const { data: asteroids, isLoading } = useQuery({
    queryKey: ['asteroids', date],
    queryFn: () =>
      nasaApi.asteroids.getAsteroidsList({
        start_date: date.format('YYYY-MM-DD'),
        end_date: date.format('YYYY-MM-DD'),
      }),
  });

  React.useEffect(() => {
    if (asteroids) {
      setItems((prevItems) => [...prevItems, ...asteroids]);
    }
  }, [asteroids]);

  React.useEffect(() => {
    if (inView) {
      const nextDate = date.clone().add(1, 'day');
      setDate(nextDate);
    }
  }, [inView]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter />
        </div>

        {items && <AsteroidList items={items} />}
        {isLoading ? <Spin className={styles.spin} /> : <div ref={ref} />}
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsPage;
