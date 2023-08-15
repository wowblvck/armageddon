export const extractValueInBrackets = (input: string) => {
  const regex = /\((.*?)\)/;
  const match = input.match(regex);

  return match && match.length >= 2 ? match[1] : null;
};
