function validAnagram(str1,str2){

    if(str1.length !== str2.length){
        return false;
    }

    let  fqCounter1 = {};
    let  fqCounter2 ={};

    for(let val of str1){
        fqCounter1[val] = (fqCounter1[val]|| 0)+1;
    }
    for(let val of str2){
        fqCounter2[val] = (fqCounter2[val] || 0)+1;
    }

    for(let key in fqCounter1){
        if(!(key in fqCounter2)){
            return false;
        }

        if(fqCounter2[key] !== fqCounter1[key]){
            return false;
        }
    }

    console.log(fqCounter1);
    console.log(fqCounter2);

    return true;
}
const str1 = "";
const str2 = "";

console.log(validAnagram(str1,str2));

export default validAnagram