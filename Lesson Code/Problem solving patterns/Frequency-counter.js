function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let fqCounter1 = {};
    let fqCounter2 = {};

    for( let val of arr1){
        fqCounter1[val] = (fqCounter1[val] || 0) + 1;
    }

    for( let val of arr2){
        fqCounter2[val] = (fqCounter2[val] || 0) + 1;
    }


    for( let key in fqCounter1){
        
        if(!(key**2 in fqCounter2)){
            return false;
        }

        if(fqCounter2[key **2] !== fqCounter1[key]){
            return false;
        }
    }

    console.log(fqCounter1)

    console.log(fqCounter2)

    return true;
}

console.log(same([1,2,3,2],[1,9,4,4]));