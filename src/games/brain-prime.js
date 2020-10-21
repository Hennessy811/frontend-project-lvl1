import { getRandomNumber, isPrime } from '../utils/numbers.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questions = Array.from({ length: 3 }).map(() => {
  const q = getRandomNumber();
  const answer = isPrime(q) ? 'yes' : 'no';

  return [q, answer];
});

export default async () => {
  play(rules.primes, questions);
};
