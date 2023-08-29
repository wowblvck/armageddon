import styles from './styles.module.scss';

const Loader = () => {
  return <p className={styles['loading-title']}>Подождите. Контент загружается...</p>;
};

export default Loader;
