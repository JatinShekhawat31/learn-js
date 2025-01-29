
// BASIC EXAMPLE 

function chai () {
    console.log( ` jatin `)
}

//chai()


// FOR REMOVE GLOBLE POLLUTION 

/* () = first one is use for the definetion of function 
   () = second for execution 
*/

( 
    function chai1()
    {
        console.log( `kunal`)
    }
) ();
// named iife


( () => {
    console.log(`jatin`)
}
)();

( (name) =>
{
    console.log(`jatin ${name}`)
})
('shekhawat')


