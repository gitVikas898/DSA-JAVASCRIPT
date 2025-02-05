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

        if(!this.head){
            this.head = vertex;
            this.tail = this.head;
        }

        else{
            this.tail.next = vertex;
            this.tail = vertex;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

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
        if(!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val){

        let vertex = new Node(val);

        if(!this.head){
            this.head = vertex;
            this.tail = this.head;
        }

        else{
            vertex.next = this.head;
            this.head = vertex;
        }

        this.length++;
        return this;
    }

    get(index){
        
        if(index<0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter!==index){
            current = current.next;
            counter++;
        }

        return current;
    }

    set(value,index){
        let foundNode = this.get(index);
        if(!foundNode) return false;
        else{
            foundNode.val = value;
        }
        return true;
    }

    insert(index,value){
        if(index < 0 || index>this.length) return false;

        if(index === 0){
            this.unshift(value);
            return true;
        }

        if(index === this.length){
            this.push(value);
            return true;
        }

        let vertex = new Node(value);

        // find the previous node to the node where you want to insert

        let prevNode = this.get(index-1);

        //store the nodes refrence where you want to insert in a temp variable;

        let temp = prevNode.next;

        //now make prev point to my new inserted node(vertex);

        prevNode.next = vertex;

        //now connect you inserted node(vertex) to the refrence stored in temp to complete the process;

        vertex.next = temp

        //increase the size ;

        this.length++;

        return true;
    }

    remove(index){

          if(index < 0 || index>this.length) return false;
        
        if(index === 0){
            this.shift();
            return true;
        }

        if(index === this.length-1){
            this.pop();
            return true;
        }

        //remove from somewhere in between 

        // first find the node before the node to be actually removed;

        let prev = this.get(index-1);

        // store the actually removed node refrence in a temp;

        let temp = prev.next;

        //now make prev point to temp(removed nodes next);

        prev.next = temp.next;

        //return temp(removed node)

        this.length--;

        return temp;
        
    }

    print(){
        var array = [];
        let current = this.head;

        while(current){
            array.push(current.val);
            current = current.next;
        }

        console.log(array);
    }

   reverse()
    {
       //Swap head and tail;
       let currentNode = this.head;
       this.head = this.tail;
       this.tail = currentNode;

        let nextNode;
        let previousNode = null;

        for(let i = 0;i<this.length;i++){
            
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        return this;
   }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
