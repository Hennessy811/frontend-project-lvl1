import config from '../config.js';
import getRandomNumber from '../utils/randomNumber.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questionsWithAnswers = Array.from({ length: config.roundsToWin }).map(
  () => {
    const startingNumber = getRandomNumber();
    const sequenceSize = getRandomNumber(5, 16);
    const missingItemIndex = getRandomNumber(0, sequenceSize - 1);

    let missingNumber = 0;
    const sequence = Array.from({ length: sequenceSize }).map((_, i) => {
      const number = i + 1 + startingNumber;
      if (i === missingItemIndex) {
        missingNumber = number;
        return '..';
      }
      return number;
    });

    const q = sequence.join(' ');
    const answer = String(missingNumber);

    return [q, answer];
  },
);

export default async () => {
  play(rules.progression, questionsWithAnswers);
};
