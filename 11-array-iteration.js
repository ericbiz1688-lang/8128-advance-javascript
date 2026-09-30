let numbers=[3,5,7,11,14];

let total =0;
// in JS, we will use for loop to iterate through a string or an array
for (let i=0; i<numbers.length; i++) {
    total += number[i];
}
    console.log ("total=", total);

    // for (let ..of) loop
    let sum=0;
    for (let n of numbers) {
        sum +=n;
        console.log(n);
    }
  console.log ("sum=", sum);