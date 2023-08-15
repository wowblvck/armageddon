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
  }, [reset]);

  return (
    <section className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>
          {count > 0 ? 'Заказ отправлен!' : 'В корзине ничего нет :('}
        </h2>
      </div>
      <AsteroidList items={items} inCart={true} />
    </section>
  );
}

export default CartPage;
