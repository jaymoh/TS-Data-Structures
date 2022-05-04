const sumTillN = (n: number): number => { // Big O: O(1) constant time
  return n * (n + 1) / 2;
};

const sumTillN2 = (n: number): number => { // Big O: O(n) linear time
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};