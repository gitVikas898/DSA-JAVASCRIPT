function findUnique(arr){
    const frquencyObj = {};

    for(let val of arr){
        frquencyObj[val] = (frquencyObj[val] || 0)+1;
    }
    let sum = 0
    for(let  key in frquencyObj){
        if(frquencyObj[key] === 1){
            sum = sum+Number(key);
        }
    }
    return sum;
}

let arr = [1,2,3,2];

console.log(findUnique(arr));

arr = [1,1,1,1,1];

console.log(findUnique(arr));

arr = [1,2,3,4,5];

console.log(findUnique(arr));

