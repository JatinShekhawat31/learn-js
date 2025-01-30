// IF STATMENTS
/*
<, >, <=, >=, ==, ===, !=, !==,
*/

const temp = 40 
if(temp===40)
      {
        console.log("less than 50");
      }
else 
     {
        console.log("greater than 50");
     }      
//  less than 50 

const score = 200

if(score > 100)
{
    let power = "fly"
    console.log(`user power : ${power}`);
}

const balance = 1000 
if(balance<500)
    {
      console.log("less than 500");
    }
    else if (balance<750)
    {
        console.log("less than 750")
    }   
    else if (balance<1300)
    {
        console.log("less than 1300")
    }   
    else if (balance<1001)
    {
        console.log("less than 1200")
    }   

    const userLoggedIn = true
    const debitCard = true 
    const google = false 
    const email = true 

    if(userLoggedIn && debitCard )
    {
        console.log("user logged in ")
    }

if(google || email)
{
    console.log("user allow")
}
