// SINGLELETON OBJECT




// OBJECT LITERAL
// Object literal is a key-value pair

const mySym = Symbol("mykey1");
let JsUser = {
    name: 'Jatin',
    age: 20,
    email: 'jatinsinghshekhawat33@gamil.com',
    isLoggin: true,
    LastLoginDay: ['Monday', 'staurday'],
    [mySym]: 'mykey1'
};

console.log(JsUser.email);

console.log(JsUser['name']);

console.log(JsUser[mySym]);

JsUser.name = 'Jatin Singh Shekhawat';
// chage the value of name

Object.freeze(JsUser);
// freeze the object so that no one can change the value of object

