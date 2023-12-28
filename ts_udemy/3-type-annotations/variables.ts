let apples: number = 5; // number is type annotations
let speed : string = 'fast';
let hasName : boolean = true;

let nthMuch : null = null;
let nth: undefined = undefined;

// built in objects 
let now: Date = new Date();


// array 
let colors : string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[]= [true, true, false];

// classes
class Car {

}

let car: Car = new Car();


// object literal 
let point: {x: number; y: number}  = {
  x: 10,
  y: 20
  
};
  // console.log(point);
// console.log(typeof(point));


// function
const logNumber: (i: number) => void = (i: number) =>  {
  console.log(i);
};
logNumber(10);

console.log(typeof(logNumber));

