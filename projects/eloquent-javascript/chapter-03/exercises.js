////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(value1, value2) {

   if (value1 < value2){
    return Math.min(value1)

   } else if (value1 > value2){
    return Math.min(value2)

   } else if (value1 === value2){
    return Math.min(value1) && Math.min(value2)
   }

}
 
////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  if (number %2 === 0){
    return true
  } else if (number %2 !== 0){
    return false
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  letters = []
  for (var i = 0; i < string.length - 1; i ++){
   if (string[i] === char)
    letters.push(string[i])
  }
  return letters.length

}




////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  letters = []
  for (var i = 0; i < string.length - 1; i ++){
   if (string[i] === "B")
    letters.push(string[i])
  }
  return letters.length

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
