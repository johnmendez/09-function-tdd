import aliveNeighbors from './alive-neighbors';

export default function aliveEh(value) {
  const aliveSum = aliveNeighbors(value);

  if (aliveSum === 2 || aliveSum === 3) {
    return true;
  }

  return false;
}
