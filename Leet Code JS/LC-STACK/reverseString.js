/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * Simply Implement a stack and Push each char in the stack
 * Then Pop the result
 */

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

    return ++this.size;
  }
  pop(){
    if(!this.first) return null;

    let currentFirst  = this.first;

    if(this.first === this.last){
        this.last = null
    }else{
        this.first = currentFirst.next;
        currentFirst.next = null;
    }

    this.size--;
    return currentFirst.value;
  }
}



function reverses(string){

    let stack = new Stack();

    for(let i =0;i<string.length;i++){
        stack.push(string[i]);
    }
    

    for(let i =0 ;i<string.length;i++){
        string[i] = stack.pop();
    }
   return string
}

let string = ["H","E","L","L","O"];

console.log(reverses(string))