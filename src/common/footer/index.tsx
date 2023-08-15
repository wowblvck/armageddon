'use client';

import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const path = usePathname();

  return (
    <>
      {path === '/cart' && (
        <footer className={styles.footer}>
          <p className={styles.copyright}>© Все права и планета защищены</p>
        </footer>
      )}
    </>
  );
};
