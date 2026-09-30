// there are certain values that only exist in JS (uniquely JS)
// primitive data types
// string, boolean and numbers
// reference data types 
// arrays and objects

// unqiue data values in JS
let x;
console.log(x);  // <== undefined

// take 2 para but no return
function foobar(x,y) {
    console.log(x,y);  // 2 undefined, no return 
}

// return vaule sum n1 and n2
function addTwo(n1, n2) {
    return n1+n2;
}

foobar();

let y=foobar(2,3); 
console.log (y);  // y will contsin undefined foobar does not return any value

// null values are nothing , empty and does not exist
// null is always assigned by the prohrammer , so it is a concious decision.
// we use null as place holder values
let z=null;
let numbers=[10, 11, 101, 25, 12];
let largestNumber = null;
let i=0;
while (i<numbers.length) {
    if (numbers[i]>largestNumber) {
        largestNumber=numbers[i];

    }
    i++;
}

console.log ("largest number", largestNumber);

// NaN
//NaN happens when performing arth, operators on invalid values (aka not numbers)
let price=100;
let gstRate="nine percent"; //0.09
console.log(price*gstRate); //<==NaN

let a=1;
let b;
let c=2;
console.log(a+b/c); // => 1+undef/2 => NaN

////////////
console.log(1/0) // infinity