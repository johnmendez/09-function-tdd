export default function arraySum(arr) {
  const length = arr.length;
  let arraySumValue = 0;

  for (let i = 0; i < length; i++) {
    arraySumValue += arr[i];
  }

  return arraySumValue;
}
