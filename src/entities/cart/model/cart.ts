import { NearEarthObject } from '@shared/api';
import { create } from 'zustand';

type State = {
  items: NearEarthObject[];
  count: number;
};

type Actions = {
  addToCart: (item: NearEarthObject) => void;
  removeFromCart: (id: NearEarthObject['id']) => void;
  reset: () => void;
};

const initialState: State = {
  items: [],
  count: 0,
};

export const useCart = create<State & Actions>((set) => ({
  ...initialState,
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
      count: state.items.length + 1,
    })),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      count: state.items.length - 1,
    })),
  reset: () => set(initialState),
}));
