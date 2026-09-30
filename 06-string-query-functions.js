// string query functions give info about a string

// example : inlcudes -find a smaller within a bigger string

let fruits = "apples, bananas, oranges, pineapples";

// find out if the fruit strings include oranges
console.log("Does fruits have oranges?", fruits.includes("oranges"));

// indexof: find and return the index of the start of a substring
let sentence = "the quick brown fox jumps over the lazy dog";
//console.log("fox starts at index", sentence.indexof("fox"));

// .endsWith chekc if the ending of a string is that particular substring

const filename = "movie.mp4";
if (filename.endsWith(".mp4")) {

} else {

}

const prompt = require('prompt-sync')();

let emailaddress = prompt('Please enter your email address:');

if (emailaddress.includes("@")) {
    if (emailaddress.endsWith(".edu") || emailaddress.endsWith(".edu.sg")) {
        console.log ("happy");
    } else {
       console.log ("not happy");
    }
}

