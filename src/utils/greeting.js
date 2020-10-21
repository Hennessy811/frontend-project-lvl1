import promptly from 'promptly';

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ').catch(() => {
    console.log('\nGently exiting...');
    return null;
  });
  return name;
};
