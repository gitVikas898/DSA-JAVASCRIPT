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
    DfsPreOrder(){
        let result = [];
        let current = this.root;

        function traverse(node){
            result.push(node.value);

            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }
        traverse(current);
        return result;
    }

    DfsPostOrder(){
        let result = [];
        let current = this.root;

      function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

            result.push(node.value);
        }
        traverse(current);
        return result;
    }
    DfsInOrder(){
        let result = [];
        let current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);

            result.push(node.value);

            if(node.right) traverse(node.right);
        }
        traverse(current);
        return result;
    }
}

let bst = new BinarySearchTress();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.BFS());

console.log(bst.DfsPreOrder())

console.log(bst.DfsPostOrder());

console.log(bst.DfsInOrder());
