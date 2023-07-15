/** 
 * CONTROL FLOW
 * 0: Control Flow:
 * Control flow statements are used to control the flow of execution in a program. It is the order 
 * in which the code executes. Code is read from top to bottom unless redirected by conditionals or 
 * loops. Loops were mentioned in another section, but in regards to conditionals, if, else if, else,
 * and switch statements are used frequently to shift the control flow. 
 *
 *  
 * 1: if, else if, else statements 
 * These conditional statements are used to execute different actions based on different conditions.
 *     if statements: if a condition is true it is used to specify execution for a block of code.
 *     else if statements: if the first test is false, and these conditions are true, 
 *                         it executes the second block of code.
 *     else statements: if the previous tests failed, this block of code executes.
 *  
 * 
 * 2: Switch Statements
 * Another type of conditional that tests the value of an expression against multiple cases.
 * These statements are generally cleaner blocks of code over complicated if statements. 
 * 
 * 
 * */

// EXAMPLES!

// if statement
if ( 2 > 1){
    console.log("Of course 2 is greater than 1") // logs "Of course 2 is greater than 1"
};

// if, else statement

if (1 === "1"){
    console.log(true);
} else {
    console.log(false); // returns false
}

// if, else if, else statement

let weather = "sunny";

if (weather === "rainy") {
    console.log("Don't forget an umbrella!");
} else if (weather === "cloudy"){
    console.log("It might be nice out today!");
} else if (weather === "storming"){
    console.log("Better stay inside!");
} else {
    console.log("Let's grab some sunscreen!");  // logs "Let's grab some sunscreen!"
} 

// switch statement
let nailColors = 'Cajun Shrimp';

switch (nailColors) {
  case 'Oat Milk':
    console.log('Great Choice!');
    break;
  case 'Yank My Doodle':
  case 'Tickle my France-y':
    console.log('Yank My Doodle and Tickle my France-y are GREAT OPIs');
    break;
  case 'Cajun Shrimp':
    console.log('That is my favorite!'); // logs 'That is my favorite!'
    break;
  default:
    console.log(`Sorry, I don't know that color`);
};