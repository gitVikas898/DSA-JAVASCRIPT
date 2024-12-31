function BinarySearch(arr,k){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid]===k) return mid;
        else if(k>arr[mid]){
            low=mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}

console.log(BinarySearch([1,3,5,7,9,11,13,15,17,19,21],15));