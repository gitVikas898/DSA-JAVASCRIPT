class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last  = null;
        this.size  = 0;
    }

    enqueue(value){
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
            this.last  = this.first; 
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        

        return ++this.size; 
    }

    dequeue(){

        if(!this.first) return null;

        if(this.first === this.last){
            this.last = null;
        }

        let temp = this.first;

        this.first = this.first.next;

        this.size--;

        return temp.value;
    }

}
let q  = new Queue();
q.enqueue("Mongo DB");
q.enqueue("Express");
q.enqueue("React");
q.enqueue("Node")

console.log(q)

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());