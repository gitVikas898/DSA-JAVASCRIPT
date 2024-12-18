function uniqueOccurrences(arr){
    const freqCounter = {};

    for(let val of arr){
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }

    const frequencies = Object.values(freqCounter);

    const uniqueFreq = new Set(frequencies);

    return frequencies.length === uniqueFreq.size;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));
