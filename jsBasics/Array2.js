const marval_Heros = [ 'thor', 'spiderman', 'ironman']
const dc_Heros = [ 'batman', 'superman', 'wonderwoman']

// Merge two arrays

marval_Heros.push(...dc_Heros)
console.log(marval_Heros) // [ 'thor', 'spiderman', 'ironman', ['batman', 'superman', 'wonderwoman'] ]
// here we use push method so it will add dc_Heros as a single element in marval_Heros array


const allHeros = marval_Heros.concat(dc_Heros)
console.log(allHeros) // [ 'thor', 'spiderman', 'ironman', 'batman', 'superman', 'wonderwoman' ]

// Merge two arrays using spread operator
const allHeros2 = [...marval_Heros, ...dc_Heros]
console.log(allHeros2) // [ 'thor', 'spiderman', 'ironman', 'batman', 'superman', 'wonderwoman' ]

// Merge two arrays using spread operator and add new element   
const allHeros3 = [...marval_Heros, ...dc_Heros, 'flash']
console.log(allHeros3) // [ 'thor', 'spiderman', 'ironman', 'batman', 'superman', 'wonderwoman', 'flash' ]

// Merge two arrays using spread operator and add new element at the beginning
const allHeros4 = ['flash', ...marval_Heros, ...dc_Heros]
console.log(allHeros4) // [ 'flash', 'thor', 'spiderman', 'ironman', 'batman', 'superman', 'wonderwoman' ]


const another_Array = [ 1,2,3,[4,5,6],7,[1,2,[2,3]]]
console.log(another_Array.flat(Infinity))
 // [ 1, 2, 3, 4, 5, 6, 7, 1, 2, 2, 3 ]
