import { MissDistance } from '@shared/api';

export type AsteroidsUnitValue = keyof MissDistance;

export interface AsteroidsUnitOptions {
  id: number;
  value: AsteroidsUnitValue;
  label: string;
}

export const asteroidsUnits: AsteroidsUnitOptions[] = [
  { id: 1, value: 'kilometers', label: 'в километрах' },
  { id: 2, value: 'lunar', label: 'в лунных орбитах' },
];

export interface AsteroidsUnitState {
  unitValue: AsteroidsUnitValue;
  setUnitValue: (value: AsteroidsUnitValue) => void;
}
