type Orbit = {
  [key: string]: string;
};

const initialOrbit: Orbit = {
  Earth: 'Земля',
  Jupiter: 'Юпитер',
  Mars: 'Марс',
  Mercury: 'Меркурий',
  Neptune: 'Нептун',
  Saturn: 'Сатурн',
  Uranus: 'Уран',
  Venus: 'Венера',
};

export const translateOrbit = (orbit_name: string) => {
  return initialOrbit[orbit_name];
};
