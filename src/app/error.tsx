'use client';

import styles from './styles/error.module.scss';

export default function Error({ error }: { error: Error }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Что-то пошло не так :(</h2>
      <p className={styles.message}>{error.message}</p>
    </div>
  );
}
