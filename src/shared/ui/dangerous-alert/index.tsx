import styles from './styles.module.scss';
import warningIcon from '@public/icons/warning.svg';
import Image from 'next/image';

const DangerousAlert = () => {
  return (
    <div className={styles['dangerous-container']}>
      <Image quality={100} src={warningIcon} alt="Опасный астероид" />
      <p className={styles.dangerous}>&nbsp;Опасен</p>
    </div>
  );
};

export default DangerousAlert;
