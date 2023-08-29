'use client';

import { useCart } from '@/entities/cart';
import { AsteroidList } from '@entities/asteroid/ui';
import React from 'react';

import styles from './styles.module.scss';

const CartPage = () => {
  const { count, items, reset } = useCart();

  React.useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>
          {count > 0 ? 'Заказ отправлен!' : 'В корзине ничего нет :('}
        </h2>
      </div>
      <AsteroidList items={items} showOrderButton={false} />
    </section>
  );
};

export default CartPage;
