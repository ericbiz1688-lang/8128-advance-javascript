/ given a string, find the length of the longest sequence of repeating character.
// string ="aabbbcc";  3
// string ="abcddeefff"  3
//string="aaaabbccd"  4
// string ="abc"  1   

let answer = 1;
let maxCount = 1;
let sequenceCharacter = text[0];
let i = 1;
while (i < text.length) {
    //check the current i still part of the sequence
    if (text[i] === sequenceCharacter) {
        answer += 1
    } else{
        sequenceCharacter=text[i];
        answer=1;
    }

    // start of a new sequence
    if (answer > maxCount) {
        maxCount = answer;
    }

}