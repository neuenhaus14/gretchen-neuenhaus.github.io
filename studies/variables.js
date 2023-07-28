/** 
 * VARIABLES
 * 0: Variables:
 * Are names of storage locations. They house simple or complex data types so they can 
 * easily be referenced on later code. This can be done by declaration and later done by assignment. Different
 * declarations allow variables to be accessed differently.  The values can be primative, immutable data types and
 * there can be complex, mutable data types.  
 *
 *  
 * 1: Declaration and Assignment: 
 * To create a varible in javascript we must first declare it. 
 * We do that by using one of 3 declarative key words. 
 * After declaration, our variable values are able to be adjusted by assignment (the "=" operator).
 *  
 * 
 * 2: Var, let, const: 
 * These are the three declarative keywords. 
 * 
 * var = can be declared without value
 *       can be reassigned
 *       can be redeclared
 *       can be hoisted
 *       has global and local scope
 * 
 * let = can be declared without value
 *       can be reassigned
 *       cannot be redeclared
 *       cannot be hoisted
 *       has block scope
 * 
 * const = cannot be declared without value
 *       cannot be reassigned
 *       cannot be redeclared
 *       cannot be hoisted
 *       has block scope
 * const is used when you do not want to allow a value to change
 * 
 * 
 * 3: Hoisting: 
 A process where the interpreter loads variable and function declaration into memory during the compile 
 phase before executing the code. In rapid speed, hoisting pulls functions and then variable declarations to the top
 of the code. This is particulary why let and const are helpful variables. They cannot be hoisted so they cannot
 be accessed outside of their block of code.  


 * */

// 1. declaration and assignment 

// declaring a variable "age" using var 
var age;

// assigning age to a primative data type number 
age = 27;

// 2. var let and const

var age; // age can be reassigned/ redeclared to reflect anyone's age. It's unassigned so it can be used frequently
let hobies; // hobbies can be reassigned/ redeclared to reflect anyone's interests. But this does not want to be 
            // globaly reached. 
const myFirstName = "Gretchen" ;// my first name is a constant and that is not going to change under any circumstances

// let/const blocked scope 

if (1 > 0){
    let result = true;
} else{
    result = false;
}

console.log(result); // will reference error: result is not defined. This using let or const in blocked scope 
// allows for the code to remain clean 


if (1 > 0){
    var result = true;
} else{
    result = false;
}
console.log(result); // will print true

// 3: Hoisting: \

// Written Code- using var declaration:
console.log(age);
var age = 27; // this yields undefined, and NOT an error

// Executed Code:
var age; 
console.log(age); // its undefined because it hoists age to the top without the assignment. 
    age = 27

// Written Code- using let declaration:
console.log(age);
let age = 27; // this yields an error

// Executed Code:
// just a reference error, in the background age is technically hoisted, but becuase you can't access age without 
// initializing it, it comes back as an error. 

// Written Code- using const declaration:
console.log(age);
const age = 27; // this yields an error

// Executed Code:
// just a reference error, in the background age is technically hoisted, but becuase you can't access age without 
// initializing it, it comes back as an error. 