function findLongestSubstring(str){
    let maxLength = 0;
    let start = 0;

    let set = new Set();
    for(let end = 0 ; end<str.length ; end++){
        
        while(set.has(str[end])){
            set.delete(str[start]);
            start++;
        }

        set.add(str[end]);

        maxLength = Math.max(maxLength,end-start+1);
    }
    return maxLength;
}