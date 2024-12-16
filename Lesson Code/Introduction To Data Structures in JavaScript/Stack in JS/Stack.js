class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  print() {
    var array = [];

    let current = this.first;

    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;

    let currentFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentFirst.next;

      currentFirst.next = null;
    }

    this.size--;
    return currentFirst.value;
  }
}

let stack = new Stack();

stack.push("Mongo DB");
stack.push("Express JS");
stack.push("React JS");
stack.push("Node JS");

stack.print();

console.log(stack.pop());
