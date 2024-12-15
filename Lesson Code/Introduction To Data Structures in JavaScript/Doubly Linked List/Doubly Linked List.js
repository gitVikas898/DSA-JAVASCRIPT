class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let array = [];
    let current = this.head;

    while (current) {
      array.push(current.val);
      current = current.next;
    }
    console.log(array);
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let poppedNode = this.tail;

    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    // if no head exists return undefined;

    if (!this.head) return undefined;

    // if the length is === 1 meaning there is one node in the list then upon shifting simply make head and taill point null

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    // store my current head in a variable shifteNode;

    let shifteNode = this.head;

    // set the new head next of shifted node

    this.head = shifteNode.next;

    // severe the ties between my shifted node and current head;

    this.head.prev = null;
    shifteNode.next = null;

    //finally decrement the length and return the shifted node;

    this.length--;
    return shifteNode;
  }

  unshift(value) {
    // create  a new node with the value passed to the unshift function

    let newNode = new Node(value);

    // if length of the LIST is 0 then both head and tail upon unshifting should point to newNode

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // we set our currents head previous to point to my newNode

      this.head.prev = newNode;

      // we set newNodes next to point to our current head;

      newNode.next = this.head;

      // now we reassign our head as the newly created node;

      this.head = newNode;
    }

    // increase the length upon success

    this.length++;

    //return the list

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let mid = Math.floor(this.length / 2);

    if (index <= mid) {
      let start = this.head;
      let counter = 0;

      while (counter !== index) {
        start = start.next;
        counter++;
      }
      return start;
    }

    if (index > mid) {
      let end = this.tail;
      let counter = this.length - 1;

      while (counter !== index) {
        end = end.prev;
        counter--;
      }
      return end;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    let newNode = new Node(value);

    // what if list is empty and you want to insert ?

    if (!this.head) {
      if (index !== 0) return false;
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return true;
    }

    //insert logic

    let foundNode = this.get(index - 1);

    let temp = foundNode.next;

    // setting my found node.next to my new inserted node
    foundNode.next = newNode;
    // connecting my new node to my foundnode
    newNode.prev = foundNode;
    // connecting my new node with my next of orginal found node
    newNode.next = temp;
    // extablishing connection backwards
    temp.prev = newNode;

    this.length++;

    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length)return undefined;

    if(index === 0){
        this.shift();
        return true;
    }

    if(index === this.length-1){
        this.pop();
        return true;
    }

    let foundNode = this.get(index-1);

    let toBeRemovedNode = foundNode.next;

    let tempNode = toBeRemovedNode.next   // tempNode is the node after the node that is to be removed;

    // we set foundNode -> to be tempNode and then tempNode <- to be foundNode

    foundNode.next = tempNode;
    if (tempNode) tempNode.prev = foundNode;

    //severe the connection of toBeRemoved node;

    toBeRemovedNode.next = null;
    toBeRemovedNode.prev = null;

    this.length--;

    return toBeRemovedNode;
  }
}

let list = new DoublyLinkedList();

/*
console.log(list);

console.log(list.shift());

console.log(list);
*/

/*
console.log(list.unshift("First"));
console.log(list.shift())
*/

// console.log(list.get(2));

/*
list.print()

console.log(list.insert("D", 3));

list.print();*/

console.log(list.remove(2))