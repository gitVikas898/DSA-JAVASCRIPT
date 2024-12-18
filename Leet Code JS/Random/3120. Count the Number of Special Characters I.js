/**You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word. 

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters in word are 'a', 'b', and 'c'.

*/

/**
 * word = aaAbcBC
 * set = {a , A , b ,c , B ,C} 
 *                0
 */

function countSpecial(word){
    let count = 0;
    const set = new Set(word);

    set.forEach(char=>{

        const lower = char.toLowerCase();

        const upper = char.toUpperCase();

        if(set.has(lower) && set.has(upper)){
            count++;
        }
    });
    return count/2;
}

console.log(countSpecial("abBCab"));