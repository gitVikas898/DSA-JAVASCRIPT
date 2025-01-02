function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort(nums){

   
    for(let i=nums.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(nums[j]>nums[j+1]){
                swap(nums,j,j+1);
            }
        }
    }

    return nums;

}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));