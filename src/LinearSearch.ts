class LinearSearch {

  search(arr: number[], target: number): number { // Big O: O(n) // Linear time
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

  // todo: better search
}