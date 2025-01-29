const a = 20 
let b = 30 

if (true) {
    let a = 20 
    const b = 30  
    console.log("inner : ", a,b);
    
}
console.log(a,b);




function one() {
    const username = " jatin "
    function two() {
        const website = " youtube "
        console.log(username)
    }
    two()
}
one()


if (true)
{
    const username = "jatin"
    if (username === "jatin")
    {
        const website = "youtube"
        console.log(username +' ' + website);
    }
}



