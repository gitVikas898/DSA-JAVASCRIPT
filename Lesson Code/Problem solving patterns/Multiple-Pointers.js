/**
 * Works best when array is sorted
 */

function sumZero(arr){
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[left]+arr[right];

        if(sum===0){
            return[arr[left],arr[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }  
    return "No sum found";
}

const arr = [-4,-3,-2,-1,0,1,2,3,4];
console.log(sumZero(arr))