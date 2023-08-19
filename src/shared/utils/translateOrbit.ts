type Orbit = {
  [key: string]: string;
};

const initialOrbit: Orbit = {
  Earth: 'Земля',
  Mercury: 'Меркурий',
  Venus: 'Венера',
  Mars: 'Марс',
  Jupiter: 'Юпитер',
  Saturn: 'Сатурн',
  Uranus: 'Уран',
  Neptune: 'Нептун',
};

export const translateOrbit = (orbit_name: string) => {
  return initialOrbit[orbit_name];
};
