import config from '../utils/config.js';
import { getRandomNumber } from '../utils/numbers.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const getOperation = () => {
  const items = ['+', '-', '*'];
  return items[Math.floor(Math.random() * items.length)];
};

const questions = Array.from({ length: config.roundsToWin }).map(() => {
  const n1 = getRandomNumber();
  const n2 = getRandomNumber();

  const operation = getOperation();
  let q = '';
  let answer = '';

  switch (operation) {
    case '+':
      q = `${n1} + ${n2}`;
      answer = String(n1 + n2);
      break;
    case '-':
      q = `${n1} - ${n2}`;
      answer = String(n1 - n2);
      break;
    case '*':
      q = `${n1} * ${n2}`;
      answer = String(n1 * n2);
      break;
    default:
      break;
  }

  return [q, answer];
});

export default async () => {
  play(rules.calc, questions);
};
