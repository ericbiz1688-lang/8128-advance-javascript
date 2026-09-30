//               012345678901234567890123456789 
const sentence ="Jack and Jill went up the hill";
console.log("First character of the sentence=", sentence[0]);
console.log("sentence.charAt(0)=", sentence.charAt(0));
console.log("sentence.charAt(0)=", sentence.at(0))
// But unlike an array, we cannot change a string via index
sentence[0]='j';
console.log(sentence);

// slice functions
// - get a substring i.e smaller string from a string
const greeting="Merry Christmas and a Happy New Year";
console.log (greeting.slice(2, 5)); //"rry" original string not change
console.log (greeting.slice(10, 20)); //"stmas and " original string not change

// if we use slcice with only 1 parameter it will start from that index and slice all to the end
console.log (greeting.slice(20)); // "Happy New Year" original string not change

// to represent dates, we will use the ISO date format
//YYYY-MM-DD - where YYYY is the year , MM is the month and DD is the day
// use prompt ask user to enter the sdate
// then print out the year month day
// challeng: check for invalid months ... and days ignore leap year.
let date="1972-08-09";


let year = date.slice(0,4 );
let month= date.slice(5,7);
let day= date.slice(8);
console.log ("Year:", year);
console.log ("Month:", month);
console.log ("Day:", day);

if (parseInt(month<1 || parseInt(month>12)) {
    console.log("invalid month")
}
