class Recursion {
  public static fact(n: number): number {
    if (n <= 1) {
      return 1; // base case
    }

    return n * this.fact(n - 1); // Big O: O(n) // Linear time
  }
}