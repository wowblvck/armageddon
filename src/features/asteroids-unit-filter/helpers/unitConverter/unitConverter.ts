import { UnitsByType, UnitsByTypeKey } from '@features/asteroids-unit-filter';
import { roundValue, declension, numberWithSpaces } from '@shared/utils';

type MeasurementUnits = {
  [key in UnitsByTypeKey]: (unit: UnitsByType[key], value: number) => string;
};

interface UnitConverterProps {
  convertValue: (values: number[]) => void;
}

export class UnitConverter<T extends UnitsByTypeKey, U extends UnitsByType[T]>
  implements UnitConverterProps
{
  private formatValue: string | number = '';

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
        const feetDeclension = declension(value, ['фут', 'фута', 'футов']);
        return `${this.formatValue} ${feetDeclension}`;
      }
      case 'miles': {
        const milesDeclension = declension(value, ['миля', 'миль', 'миль']);
        return `${this.formatValue} ${milesDeclension}`;
      }
      case 'kilometers': {
        return `${this.formatValue} км`;
      }
      case 'meters': {
        return `${this.formatValue} м`;
      }
      default:
        return 'Неизвестно';
    }
  }

  private convertVelocity(unit: UnitsByType['velocity'], value: number) {
    switch (unit) {
      case 'miles_per_hour': {
        const milesDeclension = declension(value, ['миля/ч', 'миль/ч', 'миль/ч']);
        return `${this.formatValue} ${milesDeclension}`;
      }
      case 'kilometers_per_hour': {
        return `${this.formatValue} км/час`;
      }
      case 'kilometers_per_second': {
        return `${this.formatValue} км/с`;
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
      const { result, isRounded } = roundValue(value);
      this.formatValue = isRounded ? numberWithSpaces(result) : result;
      return conversionFunction.call(this, unit, result);
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
