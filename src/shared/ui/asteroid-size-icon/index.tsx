import React from 'react';
import Image from 'next/image';
import bigIcon from '@public/icons/asteroids/big.png';
import smallIcon from '@public/icons/asteroids/small.png';

type AsteroidSizeIconProps = {
  value: number;
  bigSize: number;
};

const AsteroidSizeIcon: React.FC<AsteroidSizeIconProps> = ({ value, bigSize }) => {
  return <Image src={value > bigSize ? bigIcon : smallIcon} alt="Asteroid" />;
};

export default AsteroidSizeIcon;
