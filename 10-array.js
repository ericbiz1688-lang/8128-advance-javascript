// how strings and arrays are similar
// 1. you can access them by index

const fruitd=["apples","oranges", "bananas"];

// but we can change the item of the array by index
fruits[1] = "bannanas";

// 2. the slice function workds  on array as well
console.log (fruits.slice(3,5));

// 3 .arrays share some functiond with stringfs esp query (wont change orginal array)
console.log(fruits.indexOf("bananas"));

console.log(fruits.indexOf("durians"));

// 4. most array functinos will change the original array
fruits.sort();
console.logs(fruits);

const touristHotspots= ["kyoto", "merlion", "Tokyo", "Big Ben"];
touristHotspots.reverse();
console.log (touristHotspots);

// CRUD for arrays
touristHotspots.push("Bukit Timah");
console.log ("After pushing", touristHotspots);

touristHotspots.splice(2,1);


