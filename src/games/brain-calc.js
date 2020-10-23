import config from '../config.js';
import getRandomNumber from '../utils/randomNumber.js';
import play from '../utils/play.js';
import rules from '../utils/rules.js';

const questionsWithAnswers = Array.from({ length: config.roundsToWin }).map(
  () => {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();

    const possibleOperations = ['+', '-', '*'];
    const operation = possibleOperations[getRandomNumber(0, 3)];
    let q = '';
    let answer = '';

    switch (operation) {
      case '+':
        q = `${n1} + ${n2}`;
        answer = n1 + n2;
        break;
      case '-':
        q = `${n1} - ${n2}`;
        answer = n1 - n2;
        break;
      case '*':
        q = `${n1} * ${n2}`;
        answer = n1 * n2;
        break;
      default:
        break;
    }

    return [q, String(answer)];
  },
);

export default async () => {
  play(rules.calc, questionsWithAnswers);
};
