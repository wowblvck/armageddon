'use client';

import { NearEarthObject } from '@shared/api';
import React from 'react';
import { AsteroidCard } from '../asteroid-card';
import styles from './styles.module.scss';

type AsteroidListProps = {
  items: NearEarthObject[];
  innerRef?: React.LegacyRef<HTMLLIElement>;
  inCart?: boolean;
};

export const AsteroidList: React.FC<AsteroidListProps> = ({ items, inCart, innerRef }) => {
  return (
    <ul className={styles.list}>
      {items.map((asteroid, idx) => (
        <li key={asteroid.id} ref={idx === items.length - 1 ? innerRef : undefined}>
          <AsteroidCard item={asteroid} inCart={inCart} />
        </li>
      ))}
    </ul>
  );
};
