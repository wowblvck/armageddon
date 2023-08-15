import { AsteroidsUnitValue } from '@features/asteroids-unit-filter';
import { declension, numberWithSpaces } from '@shared/utils';

export const convertedUnit = (unit: AsteroidsUnitValue, value: number) => {
  switch (unit) {
    case 'kilometers':
      return `${numberWithSpaces(value)} км`;
    case 'lunar':
      const lunarOrbits = declension(value, ['лунная орбита', 'лунные орбиты', 'лунных орбит']);
      return `${numberWithSpaces(value)} ${lunarOrbits}`;
    default:
      return '';
  }
};
