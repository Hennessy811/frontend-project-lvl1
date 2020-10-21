import promptly from 'promptly';
import config from './config.js';
import greeting from './greeting.js';

export default async (rules, questions) => {
  const username = await greeting();
  if (!username) return;
  let failed = false;

  if (rules) {
    console.log(rules);
  }

  for (let round = 0; round < config.roundsToWin; round += 1) {
    const [question, answer] = questions[round];
    const userAnswer = await promptly
      .prompt(`Question: ${question}`)
      .catch(() => {
        console.log('\nGently exiting...');
        return null;
      });
    if (!userAnswer) {
      return;
    }
    if (userAnswer === answer) console.log('Correct');
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      failed = true;
      break;
    }
  }

  if (!failed) {
    console.log(`Congratulations, ${username}`);
  }
};
