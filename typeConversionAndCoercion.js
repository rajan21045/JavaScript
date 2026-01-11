/*
1. Type Conversion (Explicit)
This is when you manually convert one data type to another using JavaScript functions.
*/

//String Conversion
let num = 12345; // number
let str = String(num);
console.log("Type of str:", typeof str); // "string"
console.log("Value of str:", str); // "12345"

//Number Conversion
let str1 = "6789"; // string
let num1 = Number(str1);
console.log("Type of num1:", typeof num1);

//Boolean Conversion
let str2 = ""; // empty string
let bool1 = Boolean(str2);
console.log("Type of bool1:", typeof bool1);

/*
2. Type Coercion (Implicit)
This is when JavaScript automatically converts types when performing operations.
*/

//String Coercion
//If one operand is a string, JS converts the other to a string:
let number = 11;
let number1 = '22';
let result = number + number1;
console.log("Result of string coercion:", result); // "1122"
console.log("Type of result:", typeof result); // "string"

//Number Coercion
//JS converts strings or booleans to numbers in arithmetic operations:
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log(true + 2); // 3 (true → 1)
console.log(false + 2); // 2 (false → 0)
console.log("10" / "2"); // 5

//Boolean Coercion
//Occurs in logical contexts:
if ("") console.log("Hello"); // Not printed, "" is falsy
if ("Hi") console.log("Hello"); // Printed

//Examples of Weird Coercion
console.log(1 + "2"); // "12" (string)
console.log(1 - "2"); // -1  (number)
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5