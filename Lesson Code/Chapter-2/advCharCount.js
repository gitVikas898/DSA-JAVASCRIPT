function isAlphaNumeric(char){
    var code = char.charCodeAt(0);

    if(!(code>47 && code<58) && !(code>64 && code<91)&& !(code>96 && code<123)){
        return false;
    }
    return true
}

function charCount(str){
    var obj = {}

    for(char of str){
        

        if(isAlphaNumeric(char)){
            // char =  char.toLowerCase();
            obj[char] = ++obj[char] || 1;    // means if obj[char] count is 0(falsy) add 1 else if its > 1 (truthy) then increment the count
        }
    }
    return obj
}

console.log(charCount("aaAbcBC"));



