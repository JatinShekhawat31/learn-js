// stack / heap
// stack: primitive data types
// heap: reference data types

// stack
// let myName = 'Jatin';
// let anotherName = myName;
// console.log(anotherName);
// Jatin

let myName = 'Jatin';
let anotherName = myName;
anotherName = 'Shekhawat';
console.log(myName);
console.log(anotherName);
// Jatin Shekhawat


// heap
let userOne = {
    name: 'Jatin',
    age: 20
}

let userTwo = userOne;

userTwo.name = 'Shekhawat';
// if we change the value of userTwo, it will also change the value of userOne

console.log(userOne);
// { name: 'Shekhawat', age: 20 }


