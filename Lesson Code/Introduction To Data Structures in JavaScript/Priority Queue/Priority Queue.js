class Node {
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;

        let element = this.values[index];

        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            let parentElement = this.values[parentIndex];

            if(element.priority <= parentElement.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();   
        if(this.values.length>0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];

        while(true){
            let leftChildIndex = 2*index + 1;
            let rightChildIndex = 2*index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > element.priority){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIndex
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let er = new PriorityQueue();
er.enqueue("Concussion",2);
er.enqueue("Fever",1);
er.enqueue("Fracture",3);
er.enqueue("Accident",5);
console.log(er);
console.log(er.dequeue());
console.log(er.dequeue());
