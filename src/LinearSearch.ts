class LinearSearch {

  search(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Big O: O(n) // Linear time
      }
    }
    return -1;
  }

  // todo: better search
}