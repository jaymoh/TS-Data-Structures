class BubbleSort {
  private readonly arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  // arrange the array in ascending order
  bubbleSort(): number[] { // Big O: O(n^2) - quadratic
    let len = this.arr.length;
    for (let i = len - 1; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }

    return this.arr;
  }
}