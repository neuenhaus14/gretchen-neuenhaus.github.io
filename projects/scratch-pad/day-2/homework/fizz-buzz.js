// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

// for loop first to print all the numbers 1 -100
for (var i = 1; i <= 100; i++){

    // FINALLY is what we want to start with... 
    if (i % 5 === 0 && i % 3 === 0){ // multiple of 3 and 5
        console.log("FizzBuzz") // print "FizzBuzz"
    
    }else if (i % 3 === 0){  // multiple of 3
        console.log("Fizz") // print "Fizz"

    }else if (i % 5 === 0){ // multiple of 5
        console.log("Buzz") // print "Buzz"

    // if there was a multiple of 3, 5, or both, then log the other numbers    
    }else 
        console.log(i)
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}