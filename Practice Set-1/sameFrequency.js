/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * sameFrequency(182,281) // true
sameFrequency(34,14) // false
 */

function sameFrequency(num1,num2){
    const str1 = num1.toString()
    const str2 = num2.toString()

    if (str1.length !== str2.length) return false;
    
    const fqCounter1 = {};

    const fqCounter2 = {};



    for(let val of str1){
        fqCounter1[val] = (fqCounter1[val] || 0)+1
    }

    for(let val of str2){
        fqCounter2[val] = (fqCounter2[val] || 0)+1
    }


    for(let key in fqCounter1){
        if(!(key in fqCounter2)){
            return false;
        }
        if( fqCounter2[key] !== fqCounter1[key]){
            return false
        }
    }
    return true;

}
console.log(sameFrequency(182,281));