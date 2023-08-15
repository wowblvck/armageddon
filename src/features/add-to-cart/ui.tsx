import { useCart } from '@/entities/cart';
import { NearEarthObject } from '@/shared/api';
import { Button } from '@shared/ui/button';

type AddOrRemoveFromCartProps = {
  item: NearEarthObject;
};

const AddOrRemoveFromCart: React.FC<AddOrRemoveFromCartProps> = ({ item }) => {
  const { items, addToCart, removeFromCart } = useCart();

  const includeItem = items.find((asteroid) => asteroid.id === item.id);

  const handleClick = () => {
    if (includeItem) removeFromCart(item.id);
    else addToCart(item);
  };

  return (
    <Button size="small" variant={includeItem ? 'cart' : 'order'} onClick={() => handleClick()}>
      {includeItem ? 'В корзине' : 'Заказать'}
    </Button>
  );
};

export default AddOrRemoveFromCart;
