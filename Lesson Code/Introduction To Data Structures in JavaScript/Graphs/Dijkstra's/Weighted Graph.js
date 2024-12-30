class PriorityQueue {
    
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val,priority})
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority)
    };
}



class WeightedGraph {
    constructor(){
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = [];
            return true;
        }
    }

    addEdge(vertex1,vertex2,weight){

        this.adjecencyList[vertex1].push({node:vertex2,weight});
        this.adjecencyList[vertex2].push({node:vertex1,weight});
        return true;
    }

    shortestPath(start,finish){
        const distances = {};
        const prev ={}
        const nodes = new PriorityQueue();
        let smallest;
        let path = [];
    //Initial State
        for(let vertex in this.adjecencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            prev[vertex]= null;
        }


        while(nodes.values.length){

        // Gives the node with the lowest priority 

            smallest = nodes.dequeue().val;


        // Path Building 
            if(smallest === finish){
                while(prev[smallest]){
                    path.push(smallest);
                    smallest = prev[smallest];
                }
                break;
            }

            //Computing distance and prev and updating the initial state

            if(smallest || distances[smallest] !== Infinity){

                for(let neighbors of this.adjecencyList[smallest]){

                    const distance = distances[smallest] + neighbors.weight 

                    if(distance < distances[neighbors.node]){
                        distances[neighbors.node] = distance;
                        prev[neighbors.node] = smallest;
                        nodes.enqueue(neighbors.node,distance);
                    }

                }
            }
        }

        return path.concat(start).reverse()
    }
}



let wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");


wg.addEdge("A","B",4);
wg.addEdge("A","C",2);
wg.addEdge("B","E",3);
wg.addEdge("C","D",2);
wg.addEdge("C","F",4);
wg.addEdge("D","E",3);
wg.addEdge("D","F",1);
wg.addEdge("E","F",1);

console.log(wg.shortestPath("A","E"));