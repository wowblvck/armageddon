import { declension } from '@shared/utils';
import { Button } from '@shared/ui/button';
import styles from './styles.module.scss';
import Link from 'next/link';

export const CartInfo = () => {
  const count = 2;

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
