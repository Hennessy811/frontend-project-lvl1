import config from '../utils/config.js';
import { getRandomNumber } from '../utils/numbers.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questions = Array.from({ length: config.roundsToWin }).map(() => {
  const gapSize = getRandomNumber();
  const startingNumber = getRandomNumber();
  const sequenceSize = getRandomNumber(5, 16);
  const missingItemIndex = getRandomNumber(0, sequenceSize - 1);

  let missingNumber = 0;
  const sequence = Array.from({ length: sequenceSize }).map((_, i) => {
    const number = gapSize * (i + 1) + startingNumber;
    if (i === missingItemIndex) {
      missingNumber = number;
      return '..';
    }
    return number;
  });

  const q = sequence.join(' ');
  const answer = String(missingNumber);

  return [q, answer];
});

export default async () => {
  play(rules.progression, questions);
};
