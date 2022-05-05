class DiagonalDifference {
  // Given a square matrix of integers,
  // calculate the absolute difference between the sums of its diagonals.

  // For example, the square matrix  is shown below:
  // 1 2 3
  // 4 5 6
  // 9 8 9
  // The left-to-right diagonal = 1 + 5 + 9 = 15.
  // The right to left diagonal = 3 + 5 + 9 = 17.
  // Their absolute difference is |15 - 17| = 2.
  // Function Description

  diagonalDifference(arr: number[][]): number { // Big O: O(n) -linear time
    let leftToRight = 0;
    let rightToLeft = 0;
    let squareSize = arr.length;

    for (let i = 0; i < squareSize; i++) {
      leftToRight += arr[i][i];
      rightToLeft += arr[i][squareSize - 1 - i];
    }
    return Math.abs(leftToRight - rightToLeft);
  }
}