class Node {
    constructor(value){
        this.value = value;;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTress {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;

            if(value === current.value)return false;

            while(true){

                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this
                    }

                    current = current.left;
                }

                if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }

                    current = current.right;
                }
            }
        }
    }

    BFS(){
       let data = [] , queue = [];
         
        queue.push(this.root);

        while(queue.length){

            let level = [];
            let levelSize = queue.length

            for(let i = 0 ;i<levelSize;i++){

                let node = queue.shift();

                level.push(node.value);

                if(node.left) queue.push(node.left);

                if(node.right) queue.push(node.right);
            }

            data.push(level)
           
        }
        return data;
    }
}

