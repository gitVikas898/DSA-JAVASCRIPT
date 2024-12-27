class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
      return true;
    }
    return false;
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1,vertex2){
    
    this.adjacencyList[vertex1] =this.adjacencyList[vertex1].filter(v=>v!=vertex2);

    this.adjacencyList[vertex2] =this.adjacencyList[vertex2].filter(v=>v!=vertex1);

  }

  removeVertex(vertex){

    while(this.adjacencyList[vertex].length){
        let adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex,adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS(vertex){
    let result = [];
    let visited = {};

    const dfsHelper = (v)=>{
        visited[v] = true;
        result.push(v);

        for(let neighbor of this.adjacencyList[v]){
            if(!visited[neighbor]){
                dfsHelper(neighbor)
            }
        }
    }
    dfsHelper(vertex);
    return result
  }

  dfsIterative(start){

      let discovered = {}
      let result = []
      let stack = [start];

      discovered[start] = true;

      let currentVertex;

      while(stack.length){

          currentVertex = stack.pop();
          result.push(currentVertex);
         

          this.adjacencyList[currentVertex].forEach(element => {

            if(!discovered[element]){
              discovered[element] = true;
              stack.push(element);
              
            }
              
          });
      }

      return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("D", "F");
graph.addEdge("F", "E");
graph.addEdge("E", "C");
graph.addEdge("C", "A");

console.log(graph.adjacencyList)

console.log(graph.DFS("A"))
console.log(graph.dfsIterative("A"));


