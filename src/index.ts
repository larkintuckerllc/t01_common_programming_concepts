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
