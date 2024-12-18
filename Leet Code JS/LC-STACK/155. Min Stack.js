class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let current = this.first;
            this.first = newNode;
            newNode.next = current;
        }
        this.size++;
        return this;
    }
    pop(){

        if(!this.first) return undefined;
        let removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }else{
         

            this.first = removedNode.next;

            removedNode.next = null;
        }
        this.size--;
        return removedNode.value;


    }
    top(){
        if(!this.first) return undefined;
        return this.first.value;
    }
}

let stack = new Stack()
stack.push("MERN");
stack.push("MEAN");
stack.push("JAVA");
stack.push("AI-ML");
stack.push("DATA SCIENCE");

console.log(stack);

console.log(stack.pop())
console.log(stack.top())

