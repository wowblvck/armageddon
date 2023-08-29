import { create } from 'zustand';

import { UnitsByType, UnitsByTypeKey, defaultUnitValues } from '../config';

type State = {
  unitValue: {
    [key in UnitsByTypeKey]: UnitsByType[key];
  };
};

type Actions = {
  reset: () => void;
  setUnitValue: <T extends UnitsByTypeKey>(type: T, value: UnitsByType[T]) => void;
};

const initialState: State = {
  unitValue: {
    diameter: defaultUnitValues.diameter,
    distance: defaultUnitValues.distance,
    velocity: defaultUnitValues.velocity,
  },
};

export const useUnit = create<State & Actions>((set) => ({
  ...initialState,
  reset: () => set(initialState),
  setUnitValue: (type, value) =>
    set((state) => ({
      unitValue: {
        ...state.unitValue,
        [type]: value,
      },
    })),
}));
