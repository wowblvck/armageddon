import { type NearEarthObjectFull } from '@shared/api';
import { create } from 'zustand';

type State = {
  count: number;
  items: NearEarthObjectFull[];
};

type Actions = {
  addToCart: (item: NearEarthObjectFull) => void;
  removeFromCart: (id: NearEarthObjectFull['id']) => void;
  reset: () => void;
};

const initialState: State = {
  count: 0,
  items: [],
};

export const useCart = create<State & Actions>((set) => ({
  ...initialState,
  addToCart: (item) =>
    set((state) => ({
      count: state.items.length + 1,
      items: [...state.items, item].sort((a, b) =>
        a.date > b.date ? 1 : a.date < b.date ? -1 : 0
      ),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      count: state.items.length - 1,
      items: state.items.filter((item) => item.id !== id),
    })),
  reset: () => set(initialState),
}));
