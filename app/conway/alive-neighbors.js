export default function aliveNeighbors(arr) {
  const length = arr.length;
  let arraySumValue = 0;

  for (var i = 0; i < length; i++) {
    arraySumValue += arr[i];
  }

  return arraySumValue;
}
