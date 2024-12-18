class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last  = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let currentFirst = this.first;
            this.first = newNode;
            newNode.next = currentFirst;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;

        let currentFirst = this.first;

        if(this.first === this.last){
            this.first = null
            this.last = null;
        }else{
            this.first = currentFirst.next;
            currentFirst.next = null;
        }

        this.size--;
        return currentFirst.value
    }
}

var isValid = function(s) {
    
    let stack = new Stack();

    let mapping = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let i = 0 ;i<s.length;i++){
        let current = s[i];

        if(current === '{' || current === "[" || current === "("){
            stack.push(current);
        }else{
            let top = stack.pop();

            if(top !== mapping[current]){
                return false;
            }
        }
    }

    return stack.size === 0 ;

};

console.log(isValid("()"))