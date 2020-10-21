import { getRandomNumber, isEven } from '../utils/numbers.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questions = Array.from({ length: 3 }).map(() => {
  const num = getRandomNumber();
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
});

export default async () => {
  play(rules.even, questions);
};
