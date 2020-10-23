import config from '../config.js';
import getRandomNumber from '../utils/randomNumber.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

export const isEven = answer => Number(answer) % 2 === 0;

const questionsWithAnswers = Array.from({ length: config.roundsToWin }).map(
  () => {
    const num = getRandomNumber();
    const answer = isEven(num) ? 'yes' : 'no';
    return [num, answer];
  },
);

export default async () => {
  play(rules.even, questionsWithAnswers);
};
