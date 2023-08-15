import { AsteroidsUnitValue } from '@features/asteroids-unit-filter';
import { declension } from './declension';
import { numberWithSpaces } from './numberWithSpaces';

export const convertedUnit = (unit: AsteroidsUnitValue, value: number) => {
  const valueWithSpaces = numberWithSpaces(value);

  switch (unit) {
    case 'kilometers':
      return `${valueWithSpaces} км`;
    case 'lunar':
      const lunarDeclension = declension(value, ['лунная орбита', 'лунные орбиты', 'лунных орбит']);
      return `${valueWithSpaces} ${lunarDeclension}`;
    default:
      return 'Неизвестно';
  }
};
