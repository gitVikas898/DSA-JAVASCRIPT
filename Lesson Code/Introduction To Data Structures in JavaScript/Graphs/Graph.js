class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if(!this.adjacencyList[name]){
            this.adjacencyList[name] = [];
            return true;
        }
        return false;
    }
    addEdge(v1,v2){
      
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1); 
        
            I
    }
}

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Singapore");
graph.addVertex("Shanghai");


graph.addEdge("Tokyo","Singapore");
graph.addEdge("Shanghai","Tokyo");

console.log(graph.adjacencyList)

