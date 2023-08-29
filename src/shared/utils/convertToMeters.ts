import { type EstimatedDiameter } from '@shared/api';

type ConversionFactors = {
  [key in keyof EstimatedDiameter]: number;
};

export const convertToMeters = (value: number, fromUnit: keyof EstimatedDiameter) => {
  const conversionFactors: ConversionFactors = {
    feet: 0.3048,
    kilometers: 1000,
    meters: 1,
    miles: 1609.34,
  };

  if (!conversionFactors.hasOwnProperty(fromUnit)) {
    throw new Error('Неверный формат единицы измерения. Поддерживаемые форматы: км, м, мили, футы');
  }

  return value * conversionFactors[fromUnit];
};
