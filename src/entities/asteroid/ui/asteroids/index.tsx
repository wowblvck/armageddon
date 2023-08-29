'use client';

import { type NearEarthObjectFull } from '@shared/api';
import { useAsteroidsQuery } from '@shared/hooks';
import Spin from '@shared/ui/spin';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { AsteroidList } from '../asteroid-list';
import styles from './styles.module.scss';

type AsteroidsProps = {
  initialDate: string;
  items: NearEarthObjectFull[];
};

const Asteroids: React.FC<AsteroidsProps> = ({ initialDate, items }) => {
  const { inView, ref } = useInView({ root: null, threshold: 1 });

  const {
    error,
    hasMore,
    isError,
    isFetching,
    items: asteroids,
    loadMore,
  } = useAsteroidsQuery(items, initialDate);

  React.useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  return (
    <>
      {!!asteroids.length && (
        <AsteroidList innerRef={ref} items={asteroids} showOrderButton={true} />
      )}
      {!hasMore && <p className={styles.error}>Больше нечего тебе показать :(</p>}
      {isError && error && <p className={styles.error}>{error.message}</p>}
      {isFetching && <Spin className={styles.spin} />}
    </>
  );
};

export default Asteroids;
