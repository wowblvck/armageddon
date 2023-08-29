<h1 align="center">Компоненты</h1>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroids/index.tsx">Asteroids</a></summary>

> Назначение: отображение астероидов и их последующая загрузка

#### Properties

```
items: NearEarthObjectFull[] - исходный массив астероидов (необходим для предварительного рендеринга, например, для SSR)
initialDate: string - дата получения исходного массива астероидов
```

### Использование

См. [Asteroids](../src/entities/asteroid/ui/asteroids/index.tsx)

</details>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroid-list/index.tsx">AsteroidList</a></summary>

> Назначение: вывод списка астероидов

#### Properties

```
items: NearEarthObjectFull[] - массив астероидов
innerRef?: React.LegacyRef<HTMLLIElement> - ссылка на Ref из Intersection Observer для определения последнего элемента списка (для работы подгрузки при скроллинге)
showOrderButton?: boolean - состояние отображения кнопки "ЗАКАЗАТЬ"
```

### Использование

```
const Page = () => {
  const { ref, inView } = useInView({ root: null, threshold: 1 });

  const [asteroids, setAsteroids] = useState<NearEarthObjectFull[]>([]);

  useEffect(() => {
    fetch('https://example.com/asteroids').then((res) => res.json()).then((data) => setAsteroids(data));
  }, []);

  return (
    <>
      {
        !!asteroids.length && <AsteroidList items={asteroids} innerRef={ref} showOrderButton={true} />
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroid-card/index.tsx">AsteroidCard</a></summary>

> Назначение: карточка с описанием астероида

#### Properties

```
item: NearEarthObjectFull - объект астероида для отображения
showOrderButton: boolean - состояние отображения кнопки "ЗАКАЗАТЬ"
```

### Использование

```
export const List = () => {
  return (
    <ul>
      {items.map((asteroid, idx) => (
        <li key={asteroid.id}>
          <AsteroidCard item={asteroid} showOrderButton={true} />
        </li>
      ))}
    </ul>
  );
};

```

</details>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroid-detail/index.tsx">AsteroidDetail</a></summary>

> Назначение: информация об астероиде

#### Properties

```
 item: NearEarthObjectFull - объект астероида
```

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <>
      {
        asteroid && <AsteroidDetail item={asteroid} />
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroid-approach-list/index.tsx">AsteroidApproachList</a></summary>

> Назначение: список сближений астероида

#### Properties

```
data: CloseApproachData[] - массив сближений астероида
```

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <>
      {
        asteroid && <AsteroidApproachList data={asteroid.close_approach_data} />
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/entities/asteroid/ui/asteroid-approach-item/index.tsx">AsteroidApproachItem</a></summary>

> Назначение: информация о сближении с астероидом

#### Properties

```
item: CloseApproachData - объект сближения с астероидом;
```

### Использование

```
const Page = () => {
  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <ul>
      {asteroid && asteroid.close_approach_data.map((item) => (
        <li>
          <AsteroidApproachItem item={item} />
        </li>
      ))}
    </ul>
  );
};
```

</details>

<details>
  <summary><a href="../src/entities/cart/ui/cart-info/index.tsx">CartInfo</a></summary>

> Назначение: виджет счетчика корзины

### Использование

```
const Page = () => {

  return (
    <CartInfo />
  );
};
```

</details>

<details>
  <summary><a href="../src/features/asteroids-unit-filter/ui.tsx">AsteroidUnitFilter</a></summary>

> Назначение: выбор единиц измерения значений астероида. В зависимости от выбранного типа (type) доступен набор значений единиц измерения (units). Выберите значения (units) для отображения. Первое значение в списке указывается значение по умолчанию.

> Настройки: конфигурационный файл (см. [config](../src/features/asteroids-unit-filter/config.ts)). В конфигурационном файле можно указать текст единиц измерения для отображения, а также указать значение по умолчанию.

> ВАЖНО: выбранное значение хранится в state-менеджере и распространяется на всё приложение. Если вы хотите сбросить выбранное значение используйте `reset()` из хука `useUnit()`.

#### Properties

```
type: 'distance' | 'velocity' | 'diameter' - тип единиц измерения
units: ['astronomical' | 'lunar' | 'kilometers' | 'miles' | 'kilometers_per_second' | 'kilometers_per_hour' | 'miles_per_hour' | 'meters' | 'miles' | 'feet'] - массив единиц измерения (каждому типу соответствуют свои единицы измерения)
```

### Использование

```
const Page = () => {

  return (
    <AsteroidUnitFilter type='distance' units={['astronomical', 'lunar', 'kilometers', 'miles']} />
  );
};
```

</details>

<details>
  <summary><a href="../src/features/add-to-cart/ui.tsx">AddOrRemoveFromCart</a></summary>

> Назначение: добавление или удаление объекта из корзины

#### Properties

```
item: NearEarthObjectFull - объект астероида
```

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <>
      {
        asteroid && <AddOrRemoveFromCart item={asteroid}>
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/shared/ui/button/index.tsx">Button</a></summary>

> Назначение: UI кнопки

#### Properties

```
size: 'small' | 'large' - размер кнопки
variant: 'sent' | 'order' | 'cart' - вариант отображения кнопки
children: React.ReactNode - дочерний узел
```

### Использование

```
const Page = () => {

  return (
    <Button size='small' variant='order'>Заказать</Button>
  );
};
```

</details>

<details>
  <summary><a href="../src/shared/ui/asteroid-size-icon/index.tsx">AsteroidSizeIcon</a></summary>

> Назначение: отображение иконки астероида в зависимости от его размера (диаметра)

#### Properties

```
value: number - значение диаметра астероида
bigSize: number - значение, при котором будет отображаться большой размер икони
```

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <>
      {
        asteroid && <AsteroidSizeIcon value={asteroid.estimated_diameter.meters.estimated_diameter_max} bigSize={150} />
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/shared/ui/dangerous-alert/index.tsx">DangerousAlert</a></summary>

> Назначение: отображение информационного сообщения об опасности

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});

  useEffect(() => {
    fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data));
  }, []);

  return (
    <>
      {
        asteroid && asteroid.is_potentially_hazardous_asteroid && <DangerousAlert />
      }
    </>
  );
};
```

</details>

<details>
  <summary><a href="../src/shared/ui/spin/index.tsx">Spin</a></summary>

> Назначение: UI прелоадер

### Использование

```
const Page = () => {

  const [asteroid, setAsteroid] = useState<NearEarthObjectFull>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      fetch('http://example.com/asteroid').then((res) => res.json()).then((data) => setAsteroid(data)).finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <>
      {
        isLoading && <Spin />
      }
    </>
  );
};
```

</details>
