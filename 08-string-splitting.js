// the split function turns a string into an array
let text ="the quick brown fox jumps over the lazy dog";
let name =["Tony Stark","Captain American", ""]

const words= text.split(" ");

const date ="2029-09-26";
const datepart=date.split("-");


let s="she sells seashell at the seashore";
let numberofS=0;
let index=0;
while (index<s.length){
    if (s[index]==='s') {
        //numberofS=numberofS +1
        numberofS +=1;
    }
    index++;
}


// given a string, find the length of the longest sequence of repeating character.  
// string ="aabbbcc";  3
// string ="abcddeefff"  3
// string ="abc"  1   

function longestRepeatingSequence(s) {
    if (s.length === 0) return 0;

    let maxLen = 0;
    let i = 0;

    // Loop through the entire string
    while (i < s.length) {
        let currentLen = 1;
        
        // Advance as long as the next characters match the current character
        while (i + 1 < s.length && s[i] === s[i + 1]) {
            currentLen++;
            i++;
        }
        
        // Update maxLen if this streak is the longest seen so far
        if (currentLen > maxLen) {
            maxLen = currentLen;
        }
        
        // Move to the next distinct character
        i++;
    }

    return maxLen;
}

// Test cases
console.log(longestRepeatingSequence("aabbbccccc"));     // Output: 3
console.log(longestRepeatingSequence("abcddeefff")); // Output: 3
console.log(longestRepeatingSequence("abc"));        // Output: 1