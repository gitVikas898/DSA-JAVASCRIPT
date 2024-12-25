class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let weird_prime = 31;

    for (let i = 0; i < key.length; i++) {
      let charChode = key.charCodeAt(i);
      total = (total * weird_prime + charChode) % this.keyMap.length;
    }

    return total;
  }
  set(key, value) {
    let index = this.hash(key); // first get the index using the hash function

    if (!this.keyMap[index]) {
      //If no bucket exists at this index, it initializes an empty array to store key-value pairs.
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]); // we push the key and value;
  }

  get(key) {
    let index = this.hash(key);

    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }
  /**
     * Why Use pair[0] and pair[1]?
     Each pair in the bucket is an array containing exactly two elements:

        The first element (pair[0]) is the key.
        The second element (pair[1]) is the value.
     */

    keys(){
        let keysArray = [];

        for(let i = 0;i<this.keyMap.length;i++){
          if(this.keyMap[i]){
            for(let j = 0;j<this.keyMap[i].length;j++){
              keysArray.push(this.keyMap[i][j][0]);
            }
          }
        }
        return keysArray;
    }

    values(){
      let valuesArray = [];
      for(let i = 0;i<this.keyMap.length;i++){
        if(this.keyMap[i]){
          for(let j =0;j<this.keyMap[i].length;j++){
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
      return valuesArray;
    }
}

let table = new HashTable(5);

table.set("Go","Backend");
table.set("C++","DSA");
table.set("Python","AI-ML");
table.set("Java","OOP");
table.set("Javascript","Webdevelopment");



console.log(table.keys());

console.log(table.values());