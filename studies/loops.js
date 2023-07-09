/** 
 * LOOPS
 * 0: Loops:
 * Loops are an efficient way to do something repeatedly. They reduce the amount of harcoding needed to be done
 * to achieve the same effect. One can start and end loops at any point they require. They can go on idefinitely
 * (crashing your brower) or can go as little as zero to one times. This is also called iterations. They continue for x amount of times or until 
 * the specified condition is true. There are a variety of loops in javascript, but this page will only go over 
 * three types: While, for, and for in loop. 
 *
 *  
 * 1: While Statement/Loop: 
 * A while loop is made up of the While and it's condition and then followed by a statement. 
 * As long as the specified condition is true, the statment is is executed. Once it's not longer true, the 
 * execution stops and the statement stops being executed.  
 * 
 *  
 * 2: For Statement/Loop:
 * For statement takes in 3 statements, and the code block to be executed. The 3 statements are used determine the 
 * start, end, and the update/ increment. The start tells the loop where to begin. The stop tells the condition when 
 * to stop based on a boolean value. The increment tells the code how much to iterate through. For loops repeat until 
 * the specified condition evaluates to false (when the stop statement is no longer true). This loop is used with 
 * arrays. 
 * 
 * 
 * 
 * 3: For in Statement/Loop:
 * A for in loop is used to iterate over all the properites of an object. 
 * For each property, the specific statements are executed once. 
 * 
 *  
 *  */

// While Statement/Loop:
    var count = 0 // 
    while (count < 5){ // will iterate as long as count is less than 5
        console.log(count) // count = 1, count = 2, count = 3, count = 4,
        count++ // with each iteration, count will increase by 1. 
    } // loop terminates when count = 4


// For Statements/Loop:

var favFoods = ['Burrito', 'Sushi', 'Nachos', 'Fries'];


// to iterate forwards 
    // start at 0 index             // increment thru array by 1
for (var i = 0; i < favFoods.length; i++ ){
                // stop at the end of the array
    console.log(favFoods[i]); // prints Burrito Sushi Nachos Fries individually to the console. 
}


// to iterate backwards 
    // start at end of the array      // decrement thru array by 1
    for (var i = favFoods.length -1; i >= 0; i-- ){
                        // stop at the last index (zero)
    console.log(favFoods[i]); // prints Fries Nachos Sushi Burrito individually to the console. 
}


// For in Statement/Loop:

var person = {
    name: "Gretchen",
    age: 27
}

for (var key in person){ // sets up the for in loop with the object person
    console.log(key); // loops through array for each property and hits the statement. Prints just the keys: name and age 
    console.log(person[key]); // loops through array and prints just the values: Gretchen and 27
}

