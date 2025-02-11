// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

let ourTuple: [number, boolean,string];

ourTuple = [3, true, "love u"]

console.log(typeof(ourTuple));
console.log(ourTuple);


// Readonly Tuple : A good practice is to make your tuple readonly Tuples only have strongly defined types for the initial values:
// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple2);



const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push("Love u")