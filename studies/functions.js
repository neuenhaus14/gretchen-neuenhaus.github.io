/** 
 * FUNCTIONS
 * 0: Functions
 * In order to perform the same action across code blocks, a developer uses functions. Functions are a way to reuse
 * code instead of repeating the same logic again and again. There are two phases to consider when using functions. 
 * First you have to declare the function. This can achieved by "declaring" the `function` keyword, followed by the 
 * function name, parameters (optional), and the function body. Second, you have to call or invoke the function.
 * This can be achieved by using its name followed by arguments enclosed in parentheses. Every function in JavaScript 
 * implicitly returns undefined unless you explicitly specify a return value. To specify a return value for a function, 
 * you use the `return` statement followed by an expression or a value
 *
 * 
 * 1: Function Expression
 * In addition to being able to declare a function, you can define a function inside an expression. 
 * Specifically, a function expression has to be stored in a variable and can be accessed using the variableName.   
 * 
 *  
 * 2: Parameters vs Arguments
 * Parameters and arguments are two different sides of the same coin. If there is 1 parameter, there will be 1 
 * argument. If there are 7 parameters, there will be 7 arguments. Parameters are placeholders that allow the 
 * function to be written and then reused repeatedly by any data that matches the parameter. 
 * Arguments are the real values that are passed into the function in place of the parameter. The arguments are given 
 * to the function when the function is invoked/called.
 * 
 *  
 * 3: Function Scope
 * When functions have nested blocks of code, parent and child scopes are created. If the variable, for example, is
 * declared in the nested/child scope, the parent scope cannot access the child's scope. However, the most nested 
 * child scope can access all variables declared before it. 
 *
 * 4: Closures
 * A function can access all the variables defined inside the function and can also access variables defined outside 
 * the function. These are various forms of local and global variables. A global variable can be made local with a  
 * closure function. All of this to say, a closure gives you access to an outer function's scope from an 
 * inner function.
 * 
 * */

// Examples: 

// A Standard Function:
// Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(string) { // function declaration, name, and parameter
    return string.charAt(0).toUpperCase() + string.slice(1)  // return statement to specify what function will do
  }

 capitalizeWord("gretchen"); // passes in the argument of "gretchen" which then the function returns "Gretchen" 


 // Function Expression:

 let capitalizeWord = function(string) { // same function as above, but is stored in a variable. 
    return string.charAt(0).toUpperCase() + string.slice(1) 
  }

 capitalizeWord("gretchen"); // function call


 // Function Scope:
 function doSomething (){ 
  let y = 20 
   function exampleOfScope(){
      let x = 10;
      console.log(x); // this will log 10
      console.log(y); // this will log 20 because the child scope can access values in the parent scope
    }
exampleOfScope();
}

doSomething();
  
console.log(x); // this will cause an error because x can only be used in exampleOfScope

  
  // Function Closure:
  var x = 10;

function foo() {
  var y = 20; 
  function bar() { // closure
    var z = 15; 
    return x + y + z;
  }
  return bar;
}

var test = foo();

test(); // 45
 
 


