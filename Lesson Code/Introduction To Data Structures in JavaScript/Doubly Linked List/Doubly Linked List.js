class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

   push(value){
    
    let newNode = new Node(value);

    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
   }

   pop(){

    let poppedNode = this.tail;

    if(!this.head) return undefined;

    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
   }

   shift(){
        // if no head exists return undefined;

        if(!this.head)return undefined;

        // if the length is === 1 meaning there is one node in the list then upon shifting simply make head and taill point null

        if(this.length === 1){
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
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
console.log(list);

console.log(list.shift());

console.log(list);