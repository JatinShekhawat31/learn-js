const score = 400;
console.log(score);

const balance = new Number(100);
// [Number: 100]
console.log(balance);

console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
// 5e-324
console.log(balance.toString().length);
// 3
console.log(balance.valueOf());
// 100
console.log(balance.toFixed(1));
// 100.0

const balance2 = 100.123456;
console.log(balance2.toPrecision(4));
// 100.1

const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN'));
// 10,00,00,000



/*********************************************************************MATHS***************************************************************************************/


console.log(Math.abs(-100));
// 100
console.log(Math.ceil(100.1));
// 101
console.log(Math.round(100.9));
// 101
console.log(Math.floor(100.9));
// 100
console.log(Math.max(100, 200, 300));
// 300
console.log(Math.min(100, 200, 300));
// 100
console.log(Math.pow(2, 3));
// 8


console.log(Math.random());
// 0.12345678901234567  bwtween 0-1

console.log(Math.random() * 100);
// 12.345678901234567  between 0-100

console.log(Math.floor(Math.random() * 100) + 1);
// 14  between 1-100 revome decimal

const min = 100;
const max = 200;
Math.random()
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// 123  between 100-200
