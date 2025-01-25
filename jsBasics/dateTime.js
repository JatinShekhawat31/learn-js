// DATE 

let myDate = new Date();
console.log(myDate);
// 2025-01-25T12:29:35.000Z

console.log(myDate.toString());
// sat Jan 25 2025 17:59:35 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// sat Jan 25 2025

console.log(myDate.toLocaleDateString());
// 25/1/2025


// TIME


console.log(myDate.toTimeString());
// 17:59:35 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleTimeString());
// 5:59:35 PM

console.log(myDate.getFullYear());
// 2025
