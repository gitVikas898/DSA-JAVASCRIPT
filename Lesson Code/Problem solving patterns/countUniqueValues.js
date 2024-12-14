/**
 * Count Unique Values 
 * example if array is [1,1,1,1,1,2] o/p = 2 basically array is sorted 
 *  example [2,3,3,3,3]
 */

function findUnique(arr){

    if(arr.length === 0){
        return 0;
    }

    let i = 0;
    let j = 1;

    while(j<arr.length){

      if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
        j++;
    }
    return i+1;
}

const arr = [];

console.log(findUnique(arr))

    