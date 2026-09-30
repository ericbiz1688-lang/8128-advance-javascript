// Truthy values are non lboolean considered to be true when used in an if while or logical operators

let isRainy=true;
if(isRainy){
    console.log("Please bring an unbrella");
}

//In JS, anything that is not 0, "", null, undefined, NaN is truthy 
//false , 0, null, undefied and NaN are falsy values

let x="three";
let y=x*2;
if (y){
  console.log("y is a valid number");

} else {
    console.log("y is not a number");
}

const prompt=require('prompt-sync');
let name=prompt('Please enter name:');
if (name){
    console.log('hello', name);

} else {
    console.log('why soanti-social');
    
}
