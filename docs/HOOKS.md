<h1 align="center">Хуки</h1>

<details>
  <summary><a href="../src/shared/hooks/asteroid/use-asteroid-query.tsx">useAsteroidsQuery</a></summary>

> Назначение: получение данных об астероидах

#### Аргументы

```
initialData?: NearEarthObjectFull[] - исходный массив астероидов (необходим для предварительного рендеринга, например, для SSR)
initialDate?: string - дата, от начала которой требуется получить информацию об астероидах. Если дата не указана, будет принята текущая дата пользователя
```

### Возвращает

```
items: NearEarthObjectFull[] - массив астероидов
isLoading?: boolean - статус загрузки
isFetching?: boolean - статус получения
isError?: boolean - статус ошибки
hasMore: boolean - доступны ли новые элементы
loadMore: () => void - callback инициализации следующей загрузки
error: Error | null - строка с ошибкой, если такая возникает
```

### Использование

См. [AsteroidsPage](../src/entities/asteroid/ui/asteroids/index.tsx)

</details>

<details>
  <summary><a href="../src/features/asteroids-unit-filter/model/use-unit.ts">useUnit</a></summary>

> Назначение: получение и установка текущих фильтров единиц измерения

### Возвращает

```
unitValue: { distance, velocity, diameter } - получить текущее значение фильтра в зависимости от типа
setUnitValue: (type, value) - установить значение единиц измерения для определенного типа
reset: () - привести все фильтры к значению по-умолчанию
```

### Использование

См. [AsteroidUnitFilter](../src/features/asteroids-unit-filter/ui.tsx)

</details>

<details>
  <summary><a href="../src/entities/cart/model/cart.ts">useCart</a></summary>

> Назначение: управление состоянием корзины астероидов

### Возвращает

```
items: NearEarthObjectFull[] - массив астероидов в корзине
count: number - количество элементов в корзине
addToCart: (item: NearEarthObjectFull) - добавить астероид в корзину
removeFromCart: (id: number) - удалить астероид из корзины по его ID
reset: () - удалить все элементы из корзины и сбросить счётчик
```

### Использование

См. [AddOrRemoveFromCart](../src/features/add-to-cart/ui.tsx)

</details>
