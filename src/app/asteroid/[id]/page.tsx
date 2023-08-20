'use client';

import { AsteroidDetail } from '@entities/asteroid/ui';
import { CartInfo } from '@entities/cart';
import AddOrRemoveFromCart from '@features/add-to-cart/ui';
import { useUnit } from '@features/asteroids-unit-filter';
import { NearEarthObject, nasaApi } from '@shared/api';
import DangerousAlert from '@shared/ui/dangerous-alert';
import Spin from '@shared/ui/spin';
import { extractValueInBrackets } from '@shared/utils';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styles from './styles.module.scss';

type AsteroidDetailPageProps = {
  params: {
    id: string;
  };
};

function AsteroidDetailPage({ params: { id } }: AsteroidDetailPageProps) {
  const { reset } = useUnit();

  const { data: asteroid, isLoading } = useQuery<NearEarthObject>({
    queryKey: ['asteroid', id],
    queryFn: () => nasaApi.asteroids.getAsteroidById(id),
  });

  React.useEffect(() => {
    reset();
    return () => reset();
  }, []);

  return (
    <>
      <section className={styles.container}>
        {isLoading ? (
          <Spin className={styles.spin} />
        ) : (
          asteroid && (
            <>
              <div className={styles['title-container']}>
                <div className={styles.description}>
                  <h2 className={styles.title}>{extractValueInBrackets(asteroid.name)}</h2>
                  {asteroid.is_potentially_hazardous_asteroid && <DangerousAlert />}
                </div>
                <div>
                  <AddOrRemoveFromCart item={asteroid} />
                </div>
              </div>
              <AsteroidDetail item={asteroid} />
            </>
          )
        )}
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
}

export default AsteroidDetailPage;
