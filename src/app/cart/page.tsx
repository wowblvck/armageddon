'use client';

import { useCart } from '@/entities/cart';
import React from 'react';
import styles from './styles.module.scss';
import { AsteroidList } from '@entities/asteroid/ui';

function CartPage() {
  const { reset, items, count } = useCart();

  React.useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const sortItems = items.sort((a, b) =>
    a.close_approach_data[0].close_approach_date > b.close_approach_data[0].close_approach_date
      ? 1
      : a.close_approach_data[0].close_approach_date < b.close_approach_data[0].close_approach_date
      ? -1
      : 0
  );

  return (
    <section className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>
          {count > 0 ? 'Заказ отправлен!' : 'В корзине ничего нет :('}
        </h2>
      </div>
      <AsteroidList items={sortItems} inCart={true} />
    </section>
  );
}

export default CartPage;
