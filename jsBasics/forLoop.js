// FOR

// for(let i=0; i<=10; i++)
// {
//     const element = i;
//     console.log(`${i}`);
//     if (element == 5)
//     {
//         console.log(`5 is best no. : ${element}`);
//     }
// }


for(let i=1; i<=10; i++)
{
    console.log(`table : ${i}`);

    for(let j=1; j<=10; j++)
    {
        console.log(i + "*" + j + "=" + i*j);

    }
}

//  LOOP WITH ARRAY 
 
let myArr = [ "jatin", "kunal", "aman", "ect" ];

for ( let a= 1; a < myArr.length; a++){
    const element = myArr[a];
    console.log(element);
}

// BREAK 

for( let i=1; i<=20; i++)
{
    if(i==5)
    {
        console.log(`Delected:5`);
        break
    }
    console.log(`value of 1 is : ${i}`)
}


// CONTINUE

for(let i=1; i<=10; i++)
{
    if(i==5)
    {
        console.log(`Delected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}