
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(string) { // requires a parameter

for (let i = string; i < 8; i += string ){
}
triangles("#")

console.log(triangles("#"))

}



////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
  for (var i = 1; i <= 15; i++){

    if (i % 5 === 0 && i % 3 === 0){
      console.log("fizzbuzz")    
  
    } else if (i % 3 === 0){
      console.log("fizz")
      
    } else if (i % 5 === 0){
      console.log("buzz")
  
    } else {
      console.log(i)
    }
  
   
  }
  
  }
  


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(string) { // requires a parameter 





}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
