'use client';

import { AsteroidList } from '@entities/asteroid/ui/';
import { CartInfo } from '@entities/cart/ui';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { useAsteroidsQuery } from '@shared/hooks';
import Spin from '@shared/ui/spin';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

const AsteroidsPage = () => {
  const { ref, inView } = useInView({ root: null, threshold: 1 });

  const { items, isLoading, hasMore, loadMore, isError, error } = useAsteroidsQuery();

  React.useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter type="distance" units={['kilometers', 'lunar']} />
        </div>

        {!!items.length && <AsteroidList items={items} innerRef={ref} showOrderButton={true} />}
        {isLoading && <Spin className={styles.spin} />}
        {!hasMore && <p className={styles.error}>Больше нечего тебе показать :(</p>}
        {isError && error && <p className={styles.error}>{error.message}</p>}
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsPage;
