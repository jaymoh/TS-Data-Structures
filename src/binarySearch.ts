class BinarySearch {
  // Search for the key in a sorted array
  // Return the index of the key if found

  private readonly arr: number[];

  // establish the array
  constructor(array: number[]) {
    this.arr = array;
  }

  // establish the start and end points
  binSearch(target: number, start: number, end: number): number { // Big O: O(log n)
    // establish the middle point
    let middle = Math.floor((end + start) / 2);

    // first case: the target is in the middle
    if (this.arr[middle] == target) {
      return middle; // base case
    }

    // second case: the target does not exist in the array
    if (start == end) {
      return -1; // base case
    }

    // third case: the target is in the left half
    if (this.arr[middle] > target) {
      return this.binSearch(target, start, middle - 1); // recurse to the left
    }

    // fourth case: the target is in the right half
    if (this.arr[middle] < target) {
      return this.binSearch(target, middle + 1, end); // recurse to the right
    }
  }

}