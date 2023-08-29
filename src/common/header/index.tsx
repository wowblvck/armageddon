import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link className={styles.link} href="/">
          Armageddon 2023
        </Link>
      </h1>
      <p className={styles.description}>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
};
