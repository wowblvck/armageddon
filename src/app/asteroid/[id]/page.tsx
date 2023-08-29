import { AsteroidDetail } from '@entities/asteroid/ui';
import { CartInfo } from '@entities/cart';
import AddOrRemoveFromCart from '@features/add-to-cart/ui';
import { nasaApi } from '@shared/api';
import DangerousAlert from '@shared/ui/dangerous-alert';
import { extractValueInBrackets } from '@shared/utils';
import styles from './styles.module.scss';

type AsteroidDetailPageProps = {
  params: {
    id: string;
  };
};

const AsteroidDetailPage = async ({ params: { id } }: AsteroidDetailPageProps) => {
  const asteroid = await nasaApi.asteroids.getAsteroidById(id);

  return (
    <>
      <section className={styles.container}>
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
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidDetailPage;
