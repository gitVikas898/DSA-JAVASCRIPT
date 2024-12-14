function charCount(str){
    //create an object to return the result 

    var result = {};

    //create a loop to loop in each character 

    for(let i = 0 ; i<str.length;i++){
        //if the char is already preset inside the result object we simply increment the count else we add the key and set the value as 1

        var char = str[i].toLowerCase();

        if(result[char]>0){
            result[char]++;
        }
        else{
            result[char] = 1;   //key : value    
        }
    }

    return result;
}

console.log(charCount("missisipi is in america"))

