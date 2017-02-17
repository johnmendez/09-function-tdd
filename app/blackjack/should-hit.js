import cardSum from './card-sum';

export default function (value1, value2) {
  if (value1 === value2) {
    return false;
  }

  if (cardSum(value1, value2) < 17) {
    return true;
  }

  if (cardSum(value1, value2) === 17) {
    return true;
  }

  if (cardSum(value1, value2) > 17) {
    return false;
  }
}
