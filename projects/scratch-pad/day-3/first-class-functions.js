// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */
// first two or three are all funcs that want you to return another function

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {  // test means create function that returns true or false
    // YOUR CODE BELOW HERE //

    return function (value){ // testing the given value 
        return value > base; // if it's greater than... the base
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function
    return function(value){ // given value
        return value < base; // return test that value is less than base
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function
    return function(string){ // given string
        return string[0].toLowerCase() === startsWith.toLowerCase(); // return tests where given string starts with startsWith char
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function 
    return function(string){ // given string
        return string[string.length-1].toLowerCase() === endsWith.toLowerCase()  //return tests where given string ends is the same as the endsWith character
    }
    
   
    // alertnatively you could have done: 
    // return function(string){ // given string
    //     var a = string.toLowerCase()
    //     var b = endsWith.toLowerCase()
    //     return a[a.length -1] === b  //return tests where given string ends is the same as the endsWith character
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * 
 * these two are like filternums example.
 * abstraaaact 
 */
function modifyStrings(strings, modify) { // modify is a function!
    // YOUR CODE BELOW HERE //
    
    
    // need to loop over strings
    // collect ARRAY results in new Variable
    // return array of modified Strings

    var output = [] // new var that takes an array
    for (var i = 0; i < strings.length; i ++){ // created the loop but now need to test true or false
        output.push(modify(strings[i])) 
    }

return output 





    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    

    // loop
    for (var i = 0; i < strings.length; i ++){
        if (test(strings[i]) === false){
            return false
        }
    }
           
return true


    // test is a function that will test an indvidual string and return true or false
    // will return true if everything passes the test
    // filter nums
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
