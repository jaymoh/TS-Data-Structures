class SelectionSort {
  private readonly arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  // arrange the array in ascending order
  selectSort() { // Big O: O(n^2) - quadratic
    let temp: number;
    let minIndex: number;

    for (let i = 0; i < this.arr.length; i++){
      minIndex = i;
      for (let j = i + 1; j < this.arr.length; j++){
        if (this.arr[j] < this.arr[minIndex]){
          minIndex = j;
        }
      }
      // swap
      temp = this.arr[i];
      this.arr[i] = this.arr[minIndex];
      this.arr[minIndex] = temp;
    }

    return this.arr;
  }
}