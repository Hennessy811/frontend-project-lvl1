import config from '../config.js';
import getRandomNumber from '../utils/randomNumber.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

export const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const questionsWithAnswers = Array.from({ length: config.roundsToWin }).map(
  () => {
    const q = getRandomNumber();
    const answer = isPrime(q) ? 'yes' : 'no';

    return [q, answer];
  },
);

export default async () => {
  play(rules.primes, questionsWithAnswers);
};
