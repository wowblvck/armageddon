import { EstimatedDiameter, MissDistance, RelativeVelocity } from '@shared/api';

export type UnitsByType = {
  diameter: keyof EstimatedDiameter;
  distance: keyof MissDistance;
  velocity: keyof RelativeVelocity;
};

export type UnitsByTypeKey = keyof UnitsByType;

export type UnitOption<T extends UnitsByTypeKey> = {
  id: number;
  label: string;
  value: UnitsByType[T];
};

export type UnitOptions = {
  [key in UnitsByTypeKey]: UnitOption<key>[];
};

export const asteroidsUnits: UnitOptions = {
  diameter: [
    {
      id: 1,
      label: 'в километрах',
      value: 'kilometers',
    },
    {
      id: 2,
      label: 'в метрах',
      value: 'meters',
    },
    {
      id: 3,
      label: 'в милях',
      value: 'miles',
    },
    {
      id: 4,
      label: 'в футах',
      value: 'feet',
    },
  ],
  distance: [
    {
      id: 1,
      label: 'в километрах',
      value: 'kilometers',
    },
    {
      id: 2,
      label: 'в астрономических единицах',
      value: 'astronomical',
    },
    {
      id: 3,
      label: 'в лунных орбитах',
      value: 'lunar',
    },
    {
      id: 4,
      label: 'в милях',
      value: 'miles',
    },
  ],
  velocity: [
    {
      id: 1,
      label: 'в км/ч',
      value: 'kilometers_per_hour',
    },
    {
      id: 2,
      label: 'в км/c',
      value: 'kilometers_per_second',
    },
    {
      id: 3,
      label: 'в миль/ч',
      value: 'miles_per_hour',
    },
  ],
};

export const defaultUnitValues: UnitsByType = {
  diameter: 'meters',
  distance: 'kilometers',
  velocity: 'kilometers_per_hour',
};
