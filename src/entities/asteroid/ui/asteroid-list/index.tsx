import { type NearEarthObjectFull } from '@shared/api';
import React from 'react';

import { AsteroidCard } from '../asteroid-card';
import styles from './styles.module.scss';

type AsteroidListProps = {
  innerRef?: React.LegacyRef<HTMLLIElement>;
  items: NearEarthObjectFull[];
  showOrderButton: boolean;
};

export const AsteroidList: React.FC<AsteroidListProps> = ({ innerRef, items, showOrderButton }) => {
  return (
    <ul className={styles.list}>
      {items.map((asteroid, idx) => (
        <li key={asteroid.id} ref={idx === items.length - 1 ? innerRef : undefined}>
          <AsteroidCard item={asteroid} showOrderButton={showOrderButton} />
        </li>
      ))}
    </ul>
  );
};
