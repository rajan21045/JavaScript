// This code demonstrates the use of different variable declarations in JavaScript

/*

Variables are Containers for Storing Data
    JavaScript Variables can be declared in 4 ways:

1. Automatically
2. Using var
3. Using let
4. Using const
 
*/

// Automatically declared variable
k = 22; 
l = 33;
n =42;
o = k + l + n;
console.log("Sum of k, l, n:", o);
/*

From the examples you can guess:
k stores the value 22
l stores the value 33
n stores the value 42
o stores the value 97 (the sum of k, l, and n)

Note:
It is considered good programming practice to always declare variables before use.

*/


//Example using const
const x = 10;
const y = 20;
const z = 30;
const m = x + y + z;
console.log("Sum of x, y, z:", m);

// Example using var
var a = 1;
var b = 2;
var c = 3;
var sum = a + b + c;
console.log("Sum of x, y, z:", sum);

//Example using let
let d = 4;
let e = 5;
let f = 6;
let total = d + e + f;
console.log("Sum of a, b, c:", total);

//Mixed Example
const price1 = 5;
const price2 = 6;
let totall = price1 + price2;

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
console.log(pi, person, answer);

let xx = "John" + " " + "Doe";
console.log("Full Name:", xx);

/*

Note: 
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.

JavaScript Identifiers: 
All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter.
3. Names can also begin with $ and _ (but we will not use it in this tutorial).
4. Names are case sensitive (y and Y are different variables).
5. Reserved words (like JavaScript keywords) cannot be used as names.

JavaScript identifiers are case-sensitive.

*/