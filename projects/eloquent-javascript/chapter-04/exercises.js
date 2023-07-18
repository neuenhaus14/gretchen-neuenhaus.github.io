////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 0) {
// range (2, 8) => [3, 4, 5, 6, 7, 8]
 
let output = [];
  
  if (start === end){
    return output;
  } else if (step < 0){
    return output;
  }

  if (step > 0){
    for (let i = start; i <= end; i+= step){
      output.push(i);
    }
  }else {
    for (let j = start; j <= end; j++){
      output.push(j);
    }
  }

  return output;

 }
   

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, output = 0) {
  if (array.length === 0){
    return output
  }
  
  
  output += array[0] 
    console.log(output);
  
  return sum(array.slice(1), output);  
  
  }

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray() {

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
// inner most point to outward

let rest = null;

for (let i = array.length - 1; i >= 0; i--){
  rest = {value: array[i], rest: rest};
}

return rest;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
// base
if (list.rest === null){
output.push(list.value);
return output;
}

//recursion
output.push(list.value);

return listToArray(list.rest, output);

};

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(num, list) { //Then add a helper function prepend, which takes an element and 
  //a list and creates a new list that adds the element to the front of the input list

list = {value: num, rest: {list} }

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) { //which takes a list and a number and returns the element at the 
  //given position in the list (with zero referring to the first element) or undefined 
  //when there is no such element.   If you haven’t already, also write a recursive version of nth.

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
