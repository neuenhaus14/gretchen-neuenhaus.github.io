/** 
 * STRING MANIPULATION
 * 0: String Manipulation:
 * As mentioned in the Data Types section, strings are a data type characterized by values/characters being 
 * encompassed by quotes: " ". Incorporating string manipulations allows us to manipulate a sequence
 * of characters. 
 *
 *  
 * 1: String Manipulation with Operators: 
 * The concatenation operator (+) concatenates two string values together. This results in a new string that is the union 
 * of the two operand strings. The other option is the assignment operator (+=). 
 *  
 * 
 * 2: String Manipulation with String Methods:
 * There are numerous string methods that allow string manipulation. Since strings are immutable, all the methods 
 * return a new string. The most popular ones used in bootcamp are below:
 * 
 *      String length - returns how long/ how many characters are in a string.
 *      String slice() - it takes 2 parameters: start position and end position. Slices a part of a string and returns that
 *                       part in a new string. The end parameter is optional
 *      String substring()- like slice. The difference is that the second parameter specifies the length of the sliced part
 *      String toUpperCase() - returns the string in full uppercase.
 *      String toLowerCase() - returns the string in full lowercase.
 *      String concat() - joins two strings together. Can be used instead of the (+) operator. 
 *      String charAt() - returns the character at a specified index in a string.    
 * 
 * */

// EXAMPLES!

// 1. String Manipulation with Operators: 
console.log("My name is" + "Gretchen.") // "My name is Gretchen."
 
let statement = "My name is"
statement += " Gretchen."// "My name is Gretchen."


//2: String Manipulation with String Methods:
var string = "Gretchen"
var lastName = "Neuenhaus"

string.length // 8
string.slice(0,3) // "Gre"
string.substring(0,3) // "Gre"
string.toUpperCase() // "GRETCHEN"
string.toLowerCase() // "gretchen"
string.concat(lastName) // "GretchenNeuenhaus"
    string.concat(" ", lastName) // "Gretchen Neuenhaus"
string.charAt(2) // "e"
