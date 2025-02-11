
// Default array
const names: string[] = ["Default"];

names.push("Dylan");
names.push("Metythorn")

console.log(names)


// Readonly : can prevent arrays form being changed.
const names2: readonly string[] = ["1"];
// names2.push("2");

console.log(names2);


// Type Inference : ts can infer the type of an array if it has values.
const numbers = [1, 2, 3];
numbers.push(4);

// numbers.push("2");

let head: number = numbers[0]