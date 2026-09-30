//sgtring functions
//1. transformation functions
//those functions modify andreturn a copy of a string
// the function does not change the original string, it returns a modified copy
const favoritefruit ="apples";
console.log(favoritefruit.toUpperCase());
console.log("favoritefruit =", favoritefruit);

const name1 ="Tan Ah Kow";
console.log(name1.toLowerCase);

//trim
const email="admin@asd.com ";
console.log(email);
console.log(email.trim);
if (email=="admin@asd.com") {
  console.log("");
}

const prompt =require('prompt-sync')();
let ans = prompt("Please enter Yes or No:") ;
console.log ("Test " + ans.trim().toLowerCase());

if (ans.trim().toLowerCase() === "yes") {
    console.log ("yes");
} else if (ans.trim().toLowerCase() === "no") {
    console.log ("no");
 
} else {
     console.log ("invalid");
}

   
