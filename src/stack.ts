class Stack {
  private arr: Array<number>
  private top: number

  constructor(length: number) {
    this.arr = new Array(length)
    this.top = -1
  }

  push(element: number) { // Big O: O(1)
    // check if stack is full
    if (this.top === this.arr.length - 1) {
      console.log('Stack is full')
      return // Big O: O(1)
    }
    this.top++
    this.arr[this.top] = element
  }

  pop() : number { // Big O: O(1)
    // check if stack is empty
    if (this.top === -1) {
      console.log('Stack is empty')
      return -1 // Big O: O(1)
    }

    let temp = this.arr[this.top]
    this.top--
    return temp
  }

}