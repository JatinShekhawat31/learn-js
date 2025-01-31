// FOR OF

// [ "", "", "" ]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr)
{
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings)
{
    console.log(`each char of ${greet}`)
}

// MAP

const map = new Map();
map.set('in', 'india');
map.set("fr", "france");
map.set('use', 'united state of america');

// console.log(map);

for (const [key , value] of map)
{
    console.log(key , ':-', value);
}


const myObject = 
{
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}   
    for ( const key in myObject)
    { 
        console.log(`${key} : ${myObject[key]}`);
    }


const programming = ['js', 'cpp', 'rb', 'py']

for(const key in programming)
{
    console.log(programming [key]);
}


const coding = ['js', 'java', 'python', 'c++'];
// coding.forEach ( function (item) {
    // console.log(item);

// })

coding.forEach ( (item)=> {
    console.log(item)
}
)


