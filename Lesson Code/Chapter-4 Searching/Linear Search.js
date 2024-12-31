function linearSearch(value,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value)return i;
    }
    return -1;
}

console.log(linearSearch(10,[100,20,10,11,14]));
console.log(linearSearch(1,[100,20,10,11,14]));
