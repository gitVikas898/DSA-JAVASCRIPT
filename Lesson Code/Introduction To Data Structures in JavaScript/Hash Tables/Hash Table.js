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
}

let table = new HashTable(13);

table.set("Go","backend");

console.log(table);

console.log(table.get("Go"))