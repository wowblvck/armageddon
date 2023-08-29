import Asteroids from '@entities/asteroid/ui/asteroids';
import { CartInfo } from '@entities/cart/ui';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { nasaApi } from '@shared/api';
import moment from 'moment';
import styles from './styles/page.module.scss';

const AsteroidsPage = async () => {
  const currentDate = moment();

  const items = await nasaApi.asteroids.getAsteroidsList({
    start_date: currentDate.format('YYYY-MM-DD'),
    end_date: currentDate.format('YYYY-MM-DD'),
  });

  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter type="distance" units={['kilometers', 'lunar']} />
        </div>

        <Asteroids items={items} initialDate={currentDate.toISOString()} />
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsPage;
