const sumTillN = (n: number): number => {
  return n * (n + 1) / 2; // Big O: O(1) constant time
};

const sumTillN2 = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum; // Big O: O(n) linear time
};