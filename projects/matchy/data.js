/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {

}

animal.species =  "cat"
animal["name"] = "Ms. Baby"
animal.noises = []

console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var noises = []

noises[0] = "Meow";
noises.push("Prr");
noises.unshift("Chirp");
noises[noises.length] = "Mew"

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


animal["noises"] = noises
animal.noises.push("Hiss");

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 * and methods. 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []
animals.push(animal);

console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck);

var cow = { species: 'cow', name: 'Ms. Moo', noises: ['Moo', 'MMMM'] }
animals.push(cow);

var dog = { species: 'dog', name: 'Spot', noises: ['Arf', 'Woof'] }
animals.push(dog);

console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [ ]
// we chose array because it is the best option for a plain and simple list. 
function getRandom (array){
 return Math.floor(Math.random() * array.length)

}

var newFriend = getRandom(animals)// rounded index from 0-3
friends.push(animals[newFriend].name) // push(animals[randomindex][name]) into friends

console.log(friends)

animals[newFriend]['friends'] = friends // add friends list as a property on one of the animals in the animals array
                            // adding to animals to a random animal 

// var newFriend = (getRandom(animals.name))
// friends.push(newFriend)

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}