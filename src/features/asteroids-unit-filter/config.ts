import { EstimatedDiameter, MissDistance, RelativeVelocity } from '@shared/api';

export type UnitsByType = {
  distance: keyof MissDistance;
  velocity: keyof RelativeVelocity;
  diameter: keyof EstimatedDiameter;
};

export type UnitsByTypeKey = keyof UnitsByType;

export type UnitOption<T extends UnitsByTypeKey> = {
  id: number;
  value: UnitsByType[T];
  label: string;
};

export type UnitOptions = {
  [key in UnitsByTypeKey]: UnitOption<key>[];
};

export const asteroidsUnits: UnitOptions = {
  diameter: [
    {
      id: 1,
      value: 'kilometers',
      label: 'в километрах',
    },
    {
      id: 2,
      value: 'meters',
      label: 'в метрах',
    },
    {
      id: 3,
      value: 'miles',
      label: 'в милях',
    },
    {
      id: 4,
      value: 'feet',
      label: 'в футах',
    },
  ],
  distance: [
    {
      id: 1,
      value: 'kilometers',
      label: 'в километрах',
    },
    {
      id: 2,
      value: 'astronomical',
      label: 'в астрономических единицах',
    },
    {
      id: 3,
      value: 'lunar',
      label: 'в лунных единицах',
    },
    {
      id: 4,
      value: 'miles',
      label: 'в милях',
    },
  ],
  velocity: [
    {
      id: 1,
      value: 'kilometers_per_hour',
      label: 'в км/час',
    },
    {
      id: 2,
      value: 'kilometers_per_second',
      label: 'в км/c',
    },
    {
      id: 3,
      value: 'miles_per_hour',
      label: 'в миля/ч',
    },
  ],
};

export const DEFAULT_DIAMETER_VALUE: keyof EstimatedDiameter = 'kilometers';
export const DEFAULT_VELOCITY_VALUE: keyof RelativeVelocity = 'kilometers_per_hour';
export const DEFAULT_DISTANCE_VALUE: keyof MissDistance = 'kilometers';
