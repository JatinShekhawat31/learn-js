const user = {
    username : "jatin",
    price : 999,

    welcomeMessage : function() {
        console.log (`${this.username}, welcome to website`);
                    //current context  
    }
}

user.welcomeMessage()
user.username= "sam"
user.welcomeMessage()

// If we use this in function 

const user1 = 
{
    username : "jatin",
    price : 999,

    welcomeMessage : function() {
        console.log (`${this.username}, welcome to website`);
                    //current context  
        console.log (this);            
    }
}

user1.welcomeMessage()
user1.username = "sam"
user1.welcomeMessage()


// () => {} ARROW FUNCTION 

// Basic example 
const addtwo = (num1, num2) => 
{
    return num1 + num2 ;
}
// IF WE WRITE IN A {}, WE HAVE TO USE RETURN KEYWORD  
console.log(addtwo(3, 4));



// * IMPLISIT RETURN 

const addThree = (num1, num2, num3) => (num1 + num2+ num3)
console.log(addThree(2, 3, 4));

// OBJECT 

const add = (num1, num2) => ({username : "jatin"})
console.log(add(2,3));