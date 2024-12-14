function isValidAnagram(str1,str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    let lookup = {};

    for(let val of str1){
        lookup[val] = (lookup[val] || 0) + 1;
    }

    console.log(lookup);

    for(let char of str2){
        if(!lookup[char]){
            return false;
        }

        lookup[char] -=1;
    }

    console.log(lookup);

    return true;
}

const str1 = "vikas";
const str2 = "Kasvi";

console.log(isValidAnagram(str1,str2));

/**
 * Note if Its Unicode Charcter just modify this  
 * 
 * for (let char of Array.from(str1)) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  and for (let char of Array.from(str2)) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char]--;
  }
 */