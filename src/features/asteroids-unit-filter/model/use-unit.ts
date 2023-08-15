import { create } from 'zustand';
import { AsteroidsUnitValue } from '../config';

export interface AsteroidsUnitState {
  unitValue: AsteroidsUnitValue;
  setUnitValue: (value: AsteroidsUnitValue) => void;
}

export const useUnit = create<AsteroidsUnitState>((set) => ({
  unitValue: 'kilometers',
  setUnitValue: (value) =>
    set(() => ({
      unitValue: value,
    })),
}));
