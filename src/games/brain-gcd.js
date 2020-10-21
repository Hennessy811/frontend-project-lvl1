import { getGcd, getRandomNumber } from '../utils/numbers.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questions = Array.from({ length: 3 }).map(() => {
  const n1 = getRandomNumber();
  const n2 = getRandomNumber();

  const q = `${n1} ${n2}`;
  const answer = String(getGcd(n1, n2));

  return [q, answer];
});

export default async () => {
  play(rules.gcd, questions);
};
