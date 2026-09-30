let a='she sells seashell';
let b="jack and jill went up the hill";

// we can open and close with double quotes and use single qoute inside
console.log('she said shedidnt know anything');

// as long as we open and close with the same type of quotes any char go into the string
console.log('she said, "I do not know"');

// there is a way to tell that a char is to be taker literally i.e part of the string not part of program
// escapr sequence - we start it by putting a \
console.log('she said, "i don\'t know anything');
let filepath= "C:\\nkx";

//special escape sequence
// \n start a new line
// \t tab character
console.log('Dear Sir,\n\tYou owe $50 dollars.');

function calculateLateFees(fee) {

    if (fee>100) {

    } else {

    }
}

// backtick strings aka string iterals
let name='tan ah kow';
let price=100;
const letter = `Dear ${name}, 
 you owe us ${price*1.10}.toFixed(2) dollars `;

 const letter2 = `Dear ${name}, 
 you owe us ${calculateLateFees(price)}.toFixed(2) dollars `;
console.log(letter2);
