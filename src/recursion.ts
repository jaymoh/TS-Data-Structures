class Recursion {

  fact(n: number): number { // Big O: O(n) - Linear time
    if (n <= 1) {
      return 1; // base case
    }

    return n * this.fact(n - 1);
  }
}