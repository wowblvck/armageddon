'use client';

import { NearEarthObject } from '@shared/api';
import React from 'react';
import { AsteroidCard } from '../asteroid-card';
import styles from './styles.module.scss';

type AsteroidListProps = {
  items: NearEarthObject[];
  inCart?: boolean;
};

export const AsteroidList: React.FC<AsteroidListProps> = ({ items, inCart }) => {
  return (
    <ul className={styles.list}>
      {items.map((asteroid) => (
        <li key={asteroid.id}>
          <AsteroidCard item={asteroid} inCart={inCart} />
        </li>
      ))}
    </ul>
  );
};
