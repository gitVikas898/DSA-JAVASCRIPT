var findClosest = function(nums){

    let closest = nums[0];

    for(let num of nums){
        if(Math.abs(num)> Math.abs(closest) || (Math.abs(num)===Math.abs(closest) && num > closest)){
            closest = num;
        }
    }
    return closest;
}

console.log(findClosest([-4,-2,1,4,8]))