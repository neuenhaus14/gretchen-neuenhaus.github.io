// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
 
  let newFlatten = array.reduce(function(accumulator, current){
    return accumulator.concat(current)

    }, [])

    return newFlatten
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, stop, body, update) {
  //(3, n => n > 0, n => n - 1, console.log)
  
for (let i = start; stop(i); i = body(i)){ //2
   update(i); // console.log(2)
}

}

// /////////////////////////////////////////////////////////////////////////////
74// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {

for (let i = 0; i < array.length; i++){
  if (!test(array[i])){
    return false;
  }
}
return true;


}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
// create a variable lrt and initialize as empty array
let ltr = [];
//create a var rtl and inti as empty array
let rtl = [];

// iterate thru input string using for loop
for (let i = 0; i < string.length; i++){
  // create a var script and assign it the result of invoking characterScript on current char code
  let script = characterScript(string.charCodeAt(i)); // will return some obj from scripts

  // determine if script is not equal to null
  if (script !== null){
    if (script.direction === 'ltr'){
      ltr.push(script);
    } else {
      rtl.push(script);
    }
  }
}

  if (ltr.length > rtl.length){
    return 'ltr';
  } else  {
    return 'rtl';
  }


}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
