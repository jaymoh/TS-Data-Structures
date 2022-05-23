class InsertionSort {

  private readonly arr: number[]

  constructor(arr:number[]) {
    this.arr = arr
  }


  // arrange the array in ascending order
  insSort(): number[] { // Big O: O(n^2) - quadratic
    let n = this.arr.length

    for (let i = 1; i < n; i++) {
      let key = this.arr[i]
      let space = i
      for (let j = space-1; j>=0; j--) {
        if (this.arr[j] > key) {
          this.arr[j+1] = this.arr[j]
          space = j
          continue
        }
        break
      }
      this.arr[space] = key
    }

    return this.arr
  }
}