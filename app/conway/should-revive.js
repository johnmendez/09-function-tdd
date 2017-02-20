import aliveNeighbors from './alive-neighbors';

export default function reviveEh(value) {
  const aliveSum = aliveNeighbors(value);

  if (aliveSum === 3) {
    return true;
  }

  return false;
}
