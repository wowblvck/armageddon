import { create } from 'zustand';
import { AsteroidsUnitState } from '../config';

export const useUnit = create<AsteroidsUnitState>((set) => ({
  unitValue: 'kilometers',
  setUnitValue: (value) =>
    set(() => ({
      unitValue: value,
    })),
}));
