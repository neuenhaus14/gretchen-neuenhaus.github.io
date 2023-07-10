// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./gretchen-neuenhaus.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

let males = _.filter(array, function(customers){
    return customers.gender === 'male';
    }); // filter and map always return arrays

return males.length

};

var femaleCount = function(array){
// reduce function loops through array of objs. returns sum as number value
    let females = _.reduce(array, function (accumulator, current){ // loops thru arr objs applying func to each obj
    
        if (current.gender === "female"){ // only count the females. access gender through dot notation
        accumulator += 1 // want to add total count of gender to current gender count
        }

        return accumulator

    }, 0 );

return females  // this should return a number value 
};
    

var oldestCustomer = function (array){
    // reduce function loops through array of objs. returns sum as number value
      let oldest = _.reduce(array, function (accumulator, current){ // loops thru arr objs applying func to each obj
        if (accumulator > current.age){ // if age of obj[i] is greater than current obj
            return accumulator.name //  return the obj[i] name
        } else{
            return current.name; // if we're here, this means the current obj is older than the previous ones... 
        }
    }, "");

    return oldest // return oldest as a string
     
}
    // determine if accumlator is older than current 
            // if true return accumulator
        // else 
            // return current
// invoke reduce. is seed undefined?    yes, assign seed to 0 index in array
// now iterate and hit the code 


var youngestCustomer = function (array){
    let youngest = _.reduce(array, function (accumulator, current, seed){
        
        if (accumulator.age < current.age){
            return accumulator.name
        } else{
            return current.name;
        }

    });

    return youngest
};

var averageBalance; // skip this one

var firstLetterCount = function (array, letter){
    let countFirstLetter =  _.filter(array, function (customers){
    let nameLowerCase = array.name.toLowerCase()
    let letterLowerCase = letter.toLowerCase()
    return nameLowerCase[0] === letterLowerCase
    });

return countFirstLetter 

}

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount = function (array){



};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
