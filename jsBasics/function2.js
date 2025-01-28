function calcualteCartPrice(num1)
{
    return num1;
}
console.log(calcualteCartPrice(100)); // 100

function calcualteCartPrice2(num1)
{
    return num1;
}
console.log(calcualteCartPrice2(200,300,400,500)); // 200
// excete olny 200 because we are passing only one parameter

function calcualteCartPrice3(...num1)
{
    return num1;
}
console.log(calcualteCartPrice3(200,300,400,500)); // [200,300,400,500]
// excete all the parameters because we are passing all the parameters
// output is in array format

function calcualteCartPrice4(num1, num2, ...num3)
{
    return num3;
}
console.log(calcualteCartPrice4(200,300,400,500)); // [400,500]
// excete all the parameters except first two parameters.

// FUNCTION WITH OBJECT

const user = {
    name: "Jatin",
    age: 30
}

function handleObject (anyobject) 
{
    console.log(`Name: ${anyobject.name} and Age: ${anyobject.age}`);
}
// handleObject(user); // Name: Jatin and Age: 30


// insted of this we can set object directly in function as below

handleObject ({
    name: "jatin shekhawat",
    age: 20
}
);


//  FUNCTION WITH ARRAY 


const myArray = [200, 300, 400, 500]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
// insted of this 

console.log(returnSecondValue([300, 400, 500, 600]));





