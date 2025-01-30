const month = 2

switch(month)
{
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("fab");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("Apr");
        break;
default :
console.log("default case")
break;

}


// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// TRUTHY VALUE 
// "0", 'false', " ", [], {}, function(){}

// NULLISH COALESCING OPERATOR (??): NULL UNDEFINED 

let val1 ;
val1 = 5 ?? 10
// 5

let val2 ;
val2 = null ?? 10
// 10

let val3 ;
val3 = undefined ?? 10 
// 10

// TERNIARY OPERATOR 
const iceTea = 1000
iceTea >= 1002 ? console.log("less than 1000") : console.log("more than 1000");
// more than 1000

