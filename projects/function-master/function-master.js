//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object)

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var key = Object.keys(object)
    return key.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var value = ""
    for ( var i = 0; i < object.length; i++){
        value.push(object[i])
    if (typeof Object.values(object[i]) === "string"){
         
    }
    return value
    }
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if (Array.isArray(collection)){
    return 'array'
   } else{
    return "object"
   }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of one word, and return the word with its first letter capitaliz
function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)  
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var array = string.split(" ");

   for (var i = 0; i < array.length; i++ ){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
   }
   return string = array.join(" ");
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// loop over object
for (var key in object){
    // conditional to find out if key equals name
    if (key === "name"){
        // return statment with capital letter
       return "Welcome " + object[key].charAt(0).toUpperCase() + object[key].slice(1) + "!"
}
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if (object.name && object.species) {
        return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1)
       
        }
    

    }
    

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var newString = []
 
    if (Array.isArray(object.noises) && object.noises.length > 0){
        for (var i = 0; i < object.noises.length; i++ ){
            newString.push(object.noises[i])
        
        }
        return newString.join(" ")
    } else {
        return 'there are no noises'
    }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {


let splitString = string.split(' ')


for (var i = 0; i < splitString.length; i ++){
    if (splitString[i].includes(word)){
        return true
    }   
}   
return false
}



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object

object.friends.push(name)

return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise 
// return true is name is in the name array of object

for (var friends in object){
    if (object.friends.includes(name)){
        return true  
    }
}
return false 
}





//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with 
// return array of names that name does not include

var newArray = []
// start with a for loop
for (var i = 0; i < array.length; i ++){
    if (!array[i]["friends"].includes(name) && array[i]["name"] !== name)
      newArray.push(array[i]["name"])

}

return newArray
}




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."

for (var key in object){
    object.key = value
    if (object !== object.key){
        return object.key
    }
}


}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array> 

if (array.includes(object.key)){
    array.slice(object.key)
}

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}