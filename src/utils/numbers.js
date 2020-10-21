export const getRandomNumber = (min = 0, max = 100) =>
  Math.ceil(Math.random() * (max - min) + min);

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

export const isEven = answer => Number(answer) % 2 === 0;

export const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
