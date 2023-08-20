<h1 align="center">Функции</h1>

<details>
  <summary><a href="../src/features/asteroids-unit-filter/helpers/unitConverter/unitConverter.ts">UnitConverter</a></summary>

> Назначение: конвертация цифрового значения в формат отображения с единицами измерения

#### Аргументы

```
type: 'distance' | 'velocity' | 'diameter' - тип конвертируемого значения
units: ['astronomical' | 'lunar' | 'kilometers' | 'miles' | 'kilometers_per_second' | 'kilometers_per_hour' | 'miles_per_hour' | 'meters' | 'miles' | 'feet'] - массив единиц измерения (каждому типу соответствуют свои единицы измерения) для конвертации
values: number[] - массив значений для выбранных единиц измерения
```

### Использование

```
const distance = new UnitConverter('distance', ['kilometers', 'meters']);
const [kilometers, meters] = distance.convertValue([0.156, 156]);

console.log(kilometers + 'или' + meters); // Output: 0.156 км или 156 метров
```

</details>

<details>
  <summary><a href="../src/shared/utils/calculateAverage.ts">calculateAverage</a></summary>

> Назначение: вычисление среднего значения числовых элементов

#### Аргументы

```
args: number[] - массив чисел
```

### Использование

```
const avg = calculateAverage(5, 10, 15);

console.log(avg); //Output: 10
```

</details>

<details>
  <summary><a href="../src/shared/utils/convertToMeters.ts">convertToMeters</a></summary>

> Назначение: конвертация значения в метры (необходимо для конвертации диаметральных значений для определения размера иконки в разных единицах измерения)

#### Аргументы

```
value: number - число для конвертации
fromUnit: 'kilometers' | 'meters' | 'miles' | 'feet' - единица измерения входного числа
```

### Использование

```
const convertedValue = convertToMeters(1000, 'kilometers');

console.log(convertedValue); //Output: 1000000
```

</details>

<details>
  <summary><a href="../src/shared/utils/declension.ts">declension</a></summary>

> Назначение: определение склонения выбранного числа

#### Аргументы

```
number: number - число для конвертации
words: [string, string, string] - массив слов в определенном падеже
```

### Использование

```
const value = 2;
const getDeclension = declension(value, ['астероид', 'астероида', 'астероидов']);

console.log(value + ' ' + getDeclension); //Output: 2 астероида
```

</details>

<details>
  <summary><a href="../src/shared/utils/extractValueInBrackets.ts">extractValueInBrackets</a></summary>

> Назначение: извлекает значение из скобок () и удаляет лишние элементы

#### Аргументы

```
input: string - входящая строка
```

### Использование

```
const input = "123 (2006 GB)";
const converted = extractValueInBrackets(input);

console.log(converted); //Output: 2006 GB
```

</details>

<details>
  <summary><a href="../src/shared/utils/formatDate.ts">formatDate</a></summary>

> Назначение: конвертирует дату формата "2023-08-01" в формат "01 авг 2023"

#### Аргументы

```
dateString: string - входящая дата
```

### Использование

```
const input = "2023-08-01";
const converted = formatDate(input);

console.log(converted); //Output: "01 авг 2023"
```

</details>

<details>
  <summary><a href="../src/shared/utils/localeDate.ts">localeDate</a></summary>

> Назначение: конвертирует время формата "1900-Feb-09 15:16" в формат "09 фев. 1900 г., 15:16"

#### Аргументы

```
date: string - входящая дата
```

### Использование

```
const input = "1900-Feb-09 15:16";
const converted = localeDate(input);

console.log(converted); //Output: "09 фев. 1900 г., 15:16"
```

</details>

<details>
  <summary><a href="../src/shared/utils/numberWithSpaces.ts">numberWithSpaces</a></summary>

> Назначение: добавляет пробелы для числе формата "1000000" > "1 000 000"

#### Аргументы

```
x: number - входящее число
```

### Использование

```
const input = 1000000;
const converted = numberWithSpaces(input);

console.log(converted); //Output: "1 000 000"
```

</details>

<details>
  <summary><a href="../src/shared/utils/roundValue.ts">roundValue</a></summary>

> Назначение: округляет число и выводит результат округления, а также true или false если значение больше 1.

#### Аргументы

```
value: number - входящее число
```

### Использование

```
const input = 1000.12315;
const { result, isRounded } = roundValue(input);

console.log(result + ' ' + isRounded); //Output: 1000 true

const floatInput = 0.31254252;
const { result, isRounded } = roundValue(floatInput);

console.log(result + ' ' + isRounded); //Output: 0.312 false
```

</details>

<details>
  <summary><a href="../src/shared/utils/translateOrbit.ts">translateOrbit</a></summary>

> Назначение: переводит название планет солнечной системы на русский язык

#### Аргументы

```
orbit_name: string - входящая строка
```

### Использование

```
const input = "Venus";
const converted = translateOrbit(input);

console.log(converted); //Output: "Венера"
```

</details>
