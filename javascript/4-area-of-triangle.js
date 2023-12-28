// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

// define side
const a = 5;
const b = 6;
const c = 7;

// find semi-perimeter
let s = ( a + b + c ) / 2;

// calculate area
let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

console.log('This area of Triangle is : ', area);