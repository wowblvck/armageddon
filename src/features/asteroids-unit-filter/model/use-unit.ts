import { create } from 'zustand';
import {
  DEFAULT_DIAMETER_VALUE,
  DEFAULT_DISTANCE_VALUE,
  DEFAULT_VELOCITY_VALUE,
  UnitsByType,
  UnitsByTypeKey,
} from '../config';

type State = {
  unitValue: {
    [key in UnitsByTypeKey]: UnitsByType[key];
  };
};

type Actions = {
  setUnitValue: <T extends UnitsByTypeKey>(type: T, value: UnitsByType[T]) => void;
  reset: () => void;
};

const initialState: State = {
  unitValue: {
    velocity: DEFAULT_VELOCITY_VALUE,
    distance: DEFAULT_DISTANCE_VALUE,
    diameter: DEFAULT_DIAMETER_VALUE,
  },
};

export const useUnit = create<State & Actions>((set) => ({
  ...initialState,
  setUnitValue: (type, value) =>
    set((state) => ({
      unitValue: {
        ...state.unitValue,
        [type]: value,
      },
    })),
  reset: () => set(initialState),
}));
