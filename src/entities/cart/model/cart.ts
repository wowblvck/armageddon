import { type NearEarthObjectFull } from '@shared/api';
import { create } from 'zustand';

type State = {
  items: NearEarthObjectFull[];
  count: number;
};

type Actions = {
  addToCart: (item: NearEarthObjectFull) => void;
  removeFromCart: (id: NearEarthObjectFull['id']) => void;
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
      items: [...state.items, item].sort((a, b) =>
        a.date > b.date ? 1 : a.date < b.date ? -1 : 0
      ),
      count: state.items.length + 1,
    })),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      count: state.items.length - 1,
    })),
  reset: () => set(initialState),
}));
