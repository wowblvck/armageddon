import warningIcon from '@public/icons/warning.svg';
import Image from 'next/image';

import styles from './styles.module.scss';

const DangerousAlert = () => {
  return (
    <div className={styles['dangerous-container']}>
      <Image alt="Опасный астероид" quality={100} src={warningIcon} />
      <p className={styles.dangerous}>&nbsp;Опасен</p>
    </div>
  );
};

export default DangerousAlert;
