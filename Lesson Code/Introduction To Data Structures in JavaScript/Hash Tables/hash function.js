function myHashFunction(key,arrayLen){
    let hash = 0;
    for(let i = 0;i<key.length;i++){
        
        let charCode = key.charCodeAt(i);

        hash = (hash*31 + charCode)%arrayLen;
    }
    return hash;
}

console.log(myHashFunction("Rajan",10));