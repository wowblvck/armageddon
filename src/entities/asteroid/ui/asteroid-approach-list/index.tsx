import { type CloseApproachData } from '@shared/api';
import React from 'react';

import { AsteroidApproachItem } from '../asteroid-approach-item';
import styles from './styles.module.scss';

type AsteroidApproachListProps = {
  data: CloseApproachData[];
};

export const AsteroidApproachList: React.FC<AsteroidApproachListProps> = ({ data }) => {
  return (
    <ul className={styles['approach-list']}>
      {data.map((item, idx) => (
        <li key={`${item.close_approach_date}_${idx}`}>
          <AsteroidApproachItem item={item} />
        </li>
      ))}
    </ul>
  );
};
