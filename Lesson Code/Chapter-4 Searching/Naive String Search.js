function naiveStringSearch(long , pattern){
    let count = 0;
    for( let i=0;i<long.length;i++){
        for(let j=0;j<pattern.length;j++){
            if(pattern[j] !== long[i+j]) break;

            if(j === pattern.length-1) count++;
        }
    }
    return count;
}


let long = "WOWOMGZWOMGZ"
let pattern = "OMG"

console.log(`${pattern} occured : ${naiveStringSearch(long,pattern)} times !`)