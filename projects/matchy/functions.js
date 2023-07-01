/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, string){
    for (var i = 0; i < array.length; i++ ){
        if (array[i].name === string){
            return array[i]
        }
}
return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (array, string, object){
    for (var i = 0; i < array.length - 1; i++ ){
        if (array[i].name === string){
            array[i] = object
        } else{

        }
}   
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove (array, name){
    for (var i = 0; i < array.length - 1; i++ ){
        if (array[i].name === name){
            array.splice(i)
    } else{

    }
    }

}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// array of animals and object representing new animal 2 b added
            //animals animal 
function add (array, object){
    // loop to access animals array
    var newArray = []
for (var i = 0; i < array.length; i ++){
    if (array[i].name === object.name) {
            newArray.push(array[i].name);
    }

    }if (newArray !== object ){
        return object
        
    }else {
        return null
        }   
    }
     

// check to make sure it works
add (animals, pig)

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
