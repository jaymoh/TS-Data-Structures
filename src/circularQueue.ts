class CircularQueue {
  private arr: Array<number>
  private front: number
  private rear: number

  constructor(length: number) {
    this.arr = new Array(length)
    this.front = -1
    this.rear = -1
  }

  addRear(element: number) { // Big O: O(1) - constant time
    // check if queue is full
    if ((this.rear - this.front == this.arr.length - 1)
      || (this.front - this.rear == 1)) {
      return;
    }
    // if queue is empty
    if (this.front == -1) {
      this.front = 0
      this.rear = 0
      this.arr[0] = element
      return;
    }
    // normal cases
    this.rear = (this.rear + 1) % this.arr.length
    this.arr[this.rear] = element
  }

  deleteFront(): number { // Big O: O(1)
    // check if queue is empty
    if (this.front == -1) {
      return -1;
    }

    // check if the queue has only one element
    if (this.front == this.rear) {
      const element = this.arr[this.front]
      this.front = -1
      this.rear = -1
      return element
    }

    // normal cases
    const element = this.arr[this.front]
    this.front = (this.front + 1) % this.arr.length
    return element
  }

}