import bigIcon from '@public/icons/asteroids/big.png';
import smallIcon from '@public/icons/asteroids/small.png';
import Image from 'next/image';
import React from 'react';

type AsteroidSizeIconProps = {
  bigSize: number;
  value: number;
};

const AsteroidSizeIcon: React.FC<AsteroidSizeIconProps> = ({ bigSize, value }) => {
  return <Image alt="Asteroid" src={value > bigSize ? bigIcon : smallIcon} />;
};

export default AsteroidSizeIcon;
