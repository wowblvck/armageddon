'use client';

import { Button } from '@shared/ui/button';
import { declension } from '@shared/utils';
import Link from 'next/link';

import { useCart } from '../../model';
import styles from './styles.module.scss';

export const CartInfo = () => {
  const { count } = useCart();

  const currentValue = declension(count, ['астероид', 'астероида', 'астероидов']);

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Корзина</h3>
        <p className={styles.items}>
          {count} {currentValue}
        </p>
      </div>

      <Link href="/cart">
        <Button size="large" variant="sent">
          Отправить
        </Button>
      </Link>
    </div>
  );
};
