const myArr = [0,1, 2, 3, 4, 5];
const myName = [ "jatin" , "shekhawat"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);
console.log(myName[1]);
console.log(myArr2[1]);


// ARRAY METHODS 

// push() - add element at the end of the array
myArr.push(6);
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

// pop() - remove element from the end of the array
myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5]

// unshift() - add element at the start of the array
myArr.unshift(-1);
console.log(myArr); // [-1, 0, 1, 2, 3, 4, 5]

// shift() - remove element from the start of the array
myArr.shift();
console.log(myArr); // [0, 1, 2, 3, 4, 5]

// indexOf() - find the index of the element
console.log(myArr.indexOf(3)); // 3
