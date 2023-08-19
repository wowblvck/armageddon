export default function calculateAverage(...args: number[]) {
  return args.reduce((acc, curr, _, { length }) => {
    return acc + curr / length;
  }, 0);
}
