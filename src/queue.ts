class Queue {
  private readonly arr: Array<number>;
  private front: number;
  private rear: number;

  constructor(length: number) {
    this.arr = new Array(length);
    this.front = -1;
    this.rear = -1;
  }

  addRear(element: number) {
    if (this.rear == this.arr.length - 1) {
      console.log("Queue is full");
      return;
    }
    // check if queue is empty
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

  deleteFront(): number {
    // check if queue is empty
    if(this.front == -1) {
      console.log("Queue is empty");
      return -1;
    }
    // check if queue has only one element
    if (this.front == this.rear) {
      const element = this.arr[this.front];
      this.front = -1;
      this.rear = -1;
      return element;
    }
    // normal cases
    const element = this.arr[this.front];
    this.front++;
    return element;
  }


}