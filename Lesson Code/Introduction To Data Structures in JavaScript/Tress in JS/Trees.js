class Node {
    constructor(value){
        this.value = value;
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

            if(value === current.value) return undefined;

            while(true){

                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
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

    find(value){
        if(!this.root) return undefined;

        let current = this.root;

        let found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }

        if(!found) return undefined;
        return current;
    }
}

let tree = new BinarySearchTress();

tree.insert(10);



tree.insert(5);
tree.insert(2);
tree.insert(7);

tree.insert(15);
tree.insert(11);
tree.insert(16);

console.log(tree);

/**
 *      10
 *   5      15
 * 2  7   11   16
 */

console.log(tree.find(11));