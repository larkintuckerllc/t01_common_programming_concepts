const anotherFunction = (x: number): number => x + 1;

// IMMUTABLE
const x = 5;
console.log(`The value of x is: ${x}`); // 5
// x = 6; // CANNOT ASSIGN BECAUSE CONSTANT
// console.log(`The value of x is: ${x}`);

// MUTABLE
let y = 5;
console.log(`The value of y is: ${y}`); // 5
y = 6;
console.log(`The value of y is: ${y}`); // 6

// RUN-TIME ASSIGNMENT
const z = anotherFunction(5);
console.log(`The value of z is: ${z}`); // 6
let zz = anotherFunction(5);
zz = zz + 1;
console.log(`The value of zz is: ${zz}`); // 7

// CONSTANT

// SHADOWING

// NUMBERS
const i = 1; // number
console.log(`The value of i is: ${i}`); // 1
const j = 1.1 // number
console.log(`The value of j is: ${j}`); // 1.1

// BOOLEAN
const b = true; // boolean
console.log(`The value of b is: ${b}`); // true

// CHARACTER
const c = 'a'; // string
console.log(`The value of c is: ${c}`); // a

// TUPLE
const tup: [number, string, number] = [0, 'a', 1.1]; // [number, string, number]
console.log(`The second value of tup is: ${tup[1]}`); // a
const [t1, t2, t3] = tup;
console.log(`The value of t1 is: ${t1}`); // 0 
console.log(`The value of t2 is: ${t2}`); // a
console.log(`The value of t3 is: ${t3}`); // 1.1

// ARRAY
const arr = [0, 1, 2]; // number[]
console.log(`The second value of arr is: ${arr[1]}`); // 1
const [a1, a2, a3] = arr;
console.log(`The value of a1 is: ${a1}`); // 0 
console.log(`The value of a2 is: ${a2}`); // 1
console.log(`The value of a3 is: ${a3}`); // 2
arr[3] = 3;
console.log(`The fourth value of arr is: ${arr[3]}`); // 3

// ASSIGNMENT