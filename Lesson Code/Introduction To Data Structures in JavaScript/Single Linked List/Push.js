class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let vertex = new Node(val);

        if(this.head === null){
            this.head = vertex;
            this.tail = this.head;
        }
        else{
            this.tail.next = vertex;
            this.tail =vertex
        }

        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){

        if(!this.head){
            return undefined;
        }

        let current = this.head;

        let newTail = current

        while(current.next){
           newTail = current;
            current = current.next;
        }

        this.tail = newTail;

        this.tail.next = null;

        this.length--;

        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift(){
        if(!this.head)return undefined;

        let current = this.head;

        this.head = current.next;

        this.length--;

        return current;
    }

    unshift(value){

        let vertex = new Node(value);

        if(!this.head){
            this.head = vertex;
            this.tail = this.head;
        }
        else {
            vertex.next = this.head;
            this.head = vertex;
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while(current !== index){
            current = current.next;
            counter++;
        }

        return current;

    }

    set(index,value){
        let foundNode = this.get(index);

        if(!foundNode) return null;

        else{
            foundNode.val = value;
        }
        return true;
    }
}

let list = new SinglyLinkedList();

list.push("Hello");
list.push("Vikas");
list.push("How");
list.push("are");
list.push("you");


list.get(2);