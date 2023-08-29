'use client';

import { useCart } from '@/entities/cart';
import { type NearEarthObjectFull } from '@/shared/api';
import { Button } from '@shared/ui/button';
import React from 'react';

type AddOrRemoveFromCartProps = {
  item: NearEarthObjectFull;
};

const AddOrRemoveFromCart: React.FC<AddOrRemoveFromCartProps> = ({ item }) => {
  const { addToCart, items, removeFromCart } = useCart();

  const includeItem = items.find((asteroid) => asteroid.id === item.id);

  const handleClick = () => {
    if (includeItem) removeFromCart(item.id);
    else addToCart(item);
  };

  return (
    <Button onClick={() => handleClick()} size="small" variant={includeItem ? 'cart' : 'order'}>
      {includeItem ? 'В корзине' : 'Заказать'}
    </Button>
  );
};

export default AddOrRemoveFromCart;
