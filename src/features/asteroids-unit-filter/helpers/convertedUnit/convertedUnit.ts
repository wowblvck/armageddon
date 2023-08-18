import { UnitsByType, UnitsByTypeKey } from '@features/asteroids-unit-filter';
import { declension } from '@shared/utils/declension';
import { numberWithSpaces } from '@shared/utils/numberWithSpaces';

type MeasurementUnits = {
  [key in UnitsByTypeKey]: (unit: UnitsByType[key], value: number) => string;
};

export default class UnitConverter<T extends UnitsByTypeKey, U extends UnitsByType[T]> {
  private formatValue = '';

  constructor(
    private type: T,
    private units: U[]
  ) {}

  private convertDistance(unit: UnitsByType['distance'], value: number) {
    switch (unit) {
      case 'kilometers':
        return `${this.formatValue} км`;
      case 'lunar':
        const lunarDeclension = declension(value, [
          'лунная орбита',
          'лунные орбиты',
          'лунных орбит',
        ]);
        return `${this.formatValue} ${lunarDeclension}`;
      case 'miles':
        const milesDeclension = declension(value, ['миля', 'миль', 'миль']);
        return `${this.formatValue} ${milesDeclension}`;
      case 'astronomical':
        return `${this.formatValue} а.e.`;
      default:
        return 'Неизвестно';
    }
  }

  private convertDiameter(unit: UnitsByType['diameter'], value: number) {
    switch (unit) {
      case 'feet': {
        return `${this.formatValue} футов`;
      }
      default:
        return 'Неизвестно';
    }
  }

  private convertVelocity(unit: UnitsByType['velocity'], value: number) {
    switch (unit) {
      case 'miles_per_hour': {
        return `${this.formatValue} миля/час`;
      }
      default:
        return 'Неизвестно';
    }
  }

  private convertValueToUnit(unit: U, value: number) {
    const measurementUnits: MeasurementUnits = {
      distance: this.convertDistance,
      diameter: this.convertDiameter,
      velocity: this.convertVelocity,
    };

    const conversionFunction = measurementUnits[this.type];
    if (conversionFunction) {
      this.formatValue = numberWithSpaces(value);
      return conversionFunction.call(this, unit, value);
    }

    return 'Unknown measurement type';
  }

  public convertValue(values: number[]) {
    if (values.length !== this.units.length) {
      throw new Error('Количество значений должно совпадать с количеством единиц');
    }

    return values.map((value, index) => this.convertValueToUnit(this.units[index], value));
  }
}
