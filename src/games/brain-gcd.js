import config from '../config.js';
import getRandomNumber from '../utils/randomNumber.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

export const getGcd = (n1, n2) => {
  let x = Math.abs(n1);
  let y = Math.abs(n2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const questionsWithAnswers = Array.from({ length: config.roundsToWin }).map(
  () => {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();

    const q = `${n1} ${n2}`;
    const answer = String(getGcd(n1, n2));

    return [q, answer];
  },
);

export default async () => {
  play(rules.gcd, questionsWithAnswers);
};
