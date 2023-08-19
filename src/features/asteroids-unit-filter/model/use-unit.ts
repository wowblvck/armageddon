import { create } from 'zustand';
import { defaultUnitValues, UnitsByType, UnitsByTypeKey } from '../config';

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
    velocity: defaultUnitValues.velocity,
    distance: defaultUnitValues.distance,
    diameter: defaultUnitValues.diameter,
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
