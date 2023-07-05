'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 *       action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 *                          collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: Function takes in input value and returns it unchanged. 
 * 
 * @param {*} value: Function takes in any input value. // every parameter needs to be listed
 * @returns {*} value: Function returns input value unchanged. 
 */


function identity(value){ 
    return value; 
}

module.exports.identity = identity;

/**
 * typeof: Function that takes in any value and returns the type of value as a string.
 * 
 * 
 * @param {value} value: function takes in any value.
 * @returns {string} value: function returns the value as a string. 
 *  
 */

  function typeOf(value){

    if (typeof value === "string"){
        return "string"
    } else if (Array.isArray(value)){
        return "array"
    } else if (typeof value === "undefined"){
        return 'undefined'
    } else if (typeof value === 'number'){
        return 'number'
    }else if (typeof value === 'boolean'){
        return 'boolean'
    }else if (value === null){
        return 'null'
    } else if(typeof value !== "function"){
        return "object"
    } else{
        return "function"
    }
    
    }

    module.exports.typeOf = typeOf;

/**
 * first: Function that takes in an array and a number and returns an empty array, the first element in an array, or 
 *          they first indexes of an array based on the number given. 
 * 
 * 
 * @param {array}: function takes in an array.
 * @param {number}: function takes in a number.
 * @returns {array}: function returns some version of an array based on various truth or false statments 
 *  
 */

 function first(array, number){
    if (Array.isArray(array) === false){
        return []
    } else if (typeof number !== "number"  ){
        return array[0]
    }else if (number > array.length){
        return array
    }else if (number < 0 ){
        return []
    } else {
        return array.slice(0, number)
    }
}

/**
 * last: Function that takes in an array and a number and returns an empty array, the first element in an array, or 
 *          they first indexes of an array based on the number given. This is the inverse of the first function. 
 * 
 * 
 * @param {array}: function takes in an array.
 * @param {number}: function takes in a number.
 * @returns {array}: function returns some version of an array based on various truth or false statments 
 *  
 */

 function last(array, number){ 
    if (Array.isArray(array) === false){
        return []
    } else if (typeof number !== "number"){
        return array[array.length - 1]
    }else if (number > array.length){
        return array
    }else if (number < 0 ){
        return []
    } else {
        return array.slice(number-1)
    }

}


/**
 * indexOf: Function that takes in an array and a value, and returns the index of the array 
 *          that is the first occurrance of the value.
 * 
 * 
 * @param {array}: function takes in an array.
 * @param {value}: function takes in a value.
 * @returns {value}: function returns a number value that represents the index of the array, or -1  
 *  
 */

  function indexOf(array, value){
    
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i

        } else {
        }
    } 
    return -1
}

/**
 * contains: Function that takes in an array and a value, and returns true if the array contains the value. 
 * 
 * 
 * @param {array}: function takes in an array.
 * @param {value}: function takes in a value.
 * @returns {boolean}: function returns a boolean based on the parameters. 
 *  
 */

 function contains(array, value){
    if(array.includes(value)){
        return true
    } else{
        return false  
        }
}


/**
 * unique: Function that takes in an array, and returns a new array with all the duplicates removed.  
 * 
 * 
 * @param {array}: function takes in an array.
 * @returns {array}: function returns a new array. 
 *  
 */

 function unique(array){
    return [...new Set(array)]
}

/**
 * filter: Designed to loop over an Array, and applies the action Function to each value in the array to return a new array.
 * 
 * @param {Array}: function takes in an array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the array.
 * 
 * @returns {array}: function returns a new array.
 *                          
 */

 function filter(array, func){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        func(array[i], i, array) 
            if (func(array[i], i, array) === true){
                newArray.push(array[i])
            } else{
            }
       }
        return newArray 
}

/**
 * reject: Designed to loop over an Array, and applies the action Function to each value in the array to return a new array.
 *         This is the inverse of the filter function. 
 * 
 * @param {Array}: function takes in an array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the array.
 * 
 * @returns {array}: function returns a new array.
 *                          
 */

 function reject(array, func){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        func(array[i], i, array)
            if (func(array[i], i, array) === false){
                newArray.push(array[i])
            }else {
            }
    }
   return newArray 
}

/**
 * partition: Designed to loop over an Array, and applies the action Function to each value in the array 
 *           to return 1 new array with 2 new sub arrays.
 * 
 * @param {Array}: function takes in an array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the array.
 * 
 * @returns {array}: function returns 2 arrays inside a new array.
 *                          
 */

 function partition (array, func){
    var truthyArray = [];
     var falsyArray = [];
     var oneArray = [];
     
     for (let i = 0; i < array.length; i++){
         
         func(array[i], i, array)
             if (func(array[i], i, array) === true){
                 truthyArray.push(array[i]);
 
             }else { 
                 falsyArray.push(array[i]);
             }
     }
      oneArray.push(truthyArray)
      oneArray.push(falsyArray)
      return oneArray
 }

 /**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 *       action Function to each value in the collection. The return value will be saved in a new array.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection
 * 
 * @returns {array}: function returns a new array.
 * 
 */

  function map(collection, func){
    var firstArray = [];
    var secondArray = [];
   
    if (Array.isArray(collection) ){
        for (let i = 0; i < collection.length; i++)
            firstArray.push(func(collection[i], i, collection))
            return firstArray 

    } else { 
        for (var key in collection){
            func(collection[key], [key], collection)
            secondArray.push((func(collection[key], [key], collection)))
        }
    }
    return secondArray
}