// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 *  TIP:There is an existing method that is good for this problem. google the method. 
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    return Array.isArray(value)

      // return true if array or false others
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise. 
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 *
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    console.log(value)

    if (Array.isArray(value)){  
        return false; 
    
    }else if (value === null){ 
        return false;

    }else if (value instanceof Date){ 
        return false;

    }else if (typeof value !== 'object'){
        return false;
    
    } else{
        return true
    }

    
    // return true if object is collection of key value pairs
    // determine if type of on input value returns 'object'
    // AND verify the vlaue is not an array and is not null and is not an instance of the date

    // use google to find out is something is an instance of date object

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)){  
        return true; 
    
    }else if (value === null){ 
        return false;

    }else if (value instanceof Date){ 
        return false;

    }else if (typeof value !== 'object'){ 
        return false;
    }else{
        return true;
    } 
    

    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === "string"){
        return 'string'
    } else if (typeof value === 'undefined'){
        return 'undefined'
    } else if (typeof value === 'number'){
        return 'number'
    } else if (typeof value === 'boolean'){
        return 'boolean'
    } else if (typeof value === 'null'){
        return 'null'
    } else if (typeof value === 'function'){
        return 'function'
    } else if (Array.isArray(value)){  
        return 'array'; 
    } else if (value instanceof Date){
        return 'date'
    } else {
        return "object"
    }


    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
