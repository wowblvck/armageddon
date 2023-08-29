type RoundValueReturn = {
  isRounded?: boolean;
  result: number;
};

export const roundValue = (value: number): RoundValueReturn => {
  let result: number;
  let isRounded: boolean = false;

  if (value > 1) {
    result = Math.trunc(value);
    isRounded = true;
  } else {
    result = Number(value.toFixed(3));
  }
  return {
    isRounded,
    result,
  };
};
