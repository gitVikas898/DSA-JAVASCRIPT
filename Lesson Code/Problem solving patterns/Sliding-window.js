function maxSumSubArray(arr,num){

    if(arr.length === 0){
        return 0;
    }

    let tempSum = 0;
    let maxSum = 0;

    for(let i=0;i<num;i++){
        maxSum +=arr[i]; // Find current max till num
    }

     tempSum = maxSum    

    for(let i = num ;i<arr.length;i++){
        
        tempSum = tempSum-arr[i-num]+arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

console.log(maxSumSubArray([1,5,4,2,9,9,9],3));