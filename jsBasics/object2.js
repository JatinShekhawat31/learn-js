// SINGLELETON  / BY CONSTRACTOR 

// const whatsapp = new object();
// singleleton object

// const whatsaspp = {}
// this is non singleleton object 

const myform = {}

myform.Id = "123abc";
myform.name = "Jatin";
myform.isLoggedIn = true;

// console.log(myform);

const RegulerUser = {
    email:"same@gmail.com",

    fullname:{
        usesrfullname:{
         firstname : "Jatin",
        lastname: "Singh"
       },
    },
}

// console.log (RegulerUser.email.fullname);


// vule come form datebase 

const users = [
    {
        id: 1 ,
        email: "jatin@gmail.com" ,
        name: "Jatin"
    },
    {
        id: 2 ,
        email: "Aaa@gamil.com",
    },

]

console.log(users[1].email);

console.log(Object.keys( myform));
// [ 'Id', 'name', 'isLoggedIn' ]
console.log(Object.values( myform));
// [ '123abc', 'Jatin', true ]
console.log(Object.entries( myform));
// [ [ 'Id', '123abc' ], [ 'name', 'Jatin' ], [ 'isLoggedIn', true ] ]

// console.log( myform.hasownProperty('Id'));
// true
// check the property is present in the object or not


const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {4: 'd', 5: 'e', 6: 'f'};
const obj3 = {7: 'g', 8: 'h', 9: 'i'};

const obj = Object.assign({},obj1, obj2, obj3);
// {} is the target object
console.log(obj);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }

const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);
// to merge or spread the object
// mostly used in react
// it is a new feature of ES6