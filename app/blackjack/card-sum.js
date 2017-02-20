import cardValue from './card-value';

export default function (value1, value2) {
  const cardSum = cardValue(value1) + cardValue(value2);

  return cardSum;
}
