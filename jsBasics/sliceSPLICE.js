const myArr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice

console.log( 'A', myArr );
const myn1 = myArr.slice(1,3); 
console.log(myn1); // [1, 2]



// splice

console.log( 'B', myArr );
const myn2 = myArr.splice(1,3);
console.log(myn2); // [1, 2, 3]

