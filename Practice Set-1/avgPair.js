function averagePair(arr,avg){
    let left = 0;
    let right = arr.length-1;
    
    while(left<right){
        let currAvg = (arr[left]+arr[right])/2
        
        if(currAvg === avg){
            return true
        }
        else if(currAvg>avg){
            right--;
        }
        else if(currAvg<avg){
            left++;
        }
    }
    return false
  }