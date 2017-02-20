import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function (value1, value2) {
  if (shouldSplit(value1, value2) == true) {
    return 'split';
  }
  if (shouldHit(value1, value2) == true) {
    return 'hit';
  }

  return 'stay';
}
