class Dequeue {
  private arr: Array<number>;
  private front: number;
  private rear: number;

  constructor(len: number) {
    this.arr = new Array(len);
    this.front = -1;
    this.rear = -1;
  }

  addRear(element: number) { // Big O: O(1)
    // check if the dequeue is full
    if (this.rear == this.arr.length - 1) {
      console.log("Queue is full");
      return;
    }
    // check if it is empty, hence first element
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.arr[0] = element;
      return;
    }
    // normal cases
    this.rear++;
    this.arr[this.rear] = element;
  }

  addFront(element: number) { // Big O: O(1)
    // check if front is set
    if (this.front == 0) {
      console.log("Front is full");
      return;
    }
    // check if it is empty, hence first element
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.arr[0] = element;
      return;
    }
    // normal cases
    this.front--;
    this.arr[this.front] = element;
  }

  deleteFront(): number { // Big O: O(1) -constant time
    // check if it is empty
    if (this.front == -1) {
      console.log("Queue is empty");
      return -1;
    }

    // check if it has only one element
    if (this.front == this.rear) {
      let temp = this.arr[this.front];
      this.front = -1;
      this.rear = -1;
      return temp;
    }

    // normal cases
    let temp = this.arr[this.front];
    this.front++;
    return temp;
  }

  deleteRear(): number { // Big O: O(1) -constant time
    // check if it is empty
    if (this.front == -1) {
      console.log("Queue is empty");
      return -1;
    }

    // check if it has only one element
    if (this.front == this.rear) {
      let temp = this.arr[this.front];
      this.front = -1;
      this.rear = -1;
      return temp;
    }

    // normal cases
    let temp = this.arr[this.rear];
    this.rear--;
    return temp;
  }
}