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
}

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Singapore");
graph.addVertex("Shanghai");

graph.addEdge("Tokyo", "Singapore");
graph.addEdge("Shanghai", "Tokyo");
graph.addEdge("Shanghai", "Singapore");

console.log(graph.adjacencyList);

graph.removeVertex("Singapore");

console.log(graph.adjacencyList);


