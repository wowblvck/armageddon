import Asteroids from '@entities/asteroid/ui/asteroids';
import { CartInfo } from '@entities/cart/ui';
import { AsteroidsUnitFilter } from '@features/asteroids-unit-filter';
import { nasaApi } from '@shared/api';
import { DEFAULT_TIMEZONE } from '@shared/config';
import moment from 'moment-timezone';

import styles from './styles/page.module.scss';

const AsteroidsPage = async () => {
  const currentDate = moment().tz(DEFAULT_TIMEZONE);

  const items = await nasaApi.asteroids.getAsteroidsList({
    end_date: currentDate.format('YYYY-MM-DD'),
    start_date: currentDate.format('YYYY-MM-DD'),
  });

  return (
    <>
      <section className={styles.container}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <AsteroidsUnitFilter type="distance" units={['kilometers', 'lunar']} />
        </div>

        <Asteroids initialDate={currentDate.toISOString()} items={items} />
      </section>
      <section>
        <CartInfo />
      </section>
    </>
  );
};

export default AsteroidsPage;
