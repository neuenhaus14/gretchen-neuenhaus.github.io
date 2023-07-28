/** 
 DATA TYPES
 0: Data types describe the different types or kinds of data that we use as programmers. In Javascript, data types 
 are separated into primitive and complex data types. Knowing what data type you are working with is important. It 
 will vastly change how you write your code, and how you can manipulate your data. 

 
 1: Primitve Data Types: These data types have no methods or properties. These are represented at the lowest level of 
 javascript's implementation. They are immutable, meaning, they cannot be changed as themselves. 
 
 An important note, when they are assigned to a variable, the variable can change, but the value itself will 
 remain the same. Primitive data types assigned to variables are copied by value. Values are direclty copied into
 the other variable. Changing one does not affect the other. 
 
 Examples:
    Number
    String
    Boolean
    Null
    Undefined
    NaN
    Infinity / -Infinity
    

 2: Complex Data Types: These data types have methods and properties. They are mutable, meaning the values
 inside these DTs can be changed and altered. 

 An important note, when an object variable is copied, the reference is copied, but the object itself is not 
 duplicated. This is copy by reference, as opposed to, copy by value. 

 Examples:
    Object
    Array
    Function
      

 * */


 // PRIMITIVE DATA TYPES:
 
 //Examples:

 //NUMBER
 var number = 1;

 //STRING
 var string = "1";
 var string1 = "one";

 //BOOLEAN
 true // boolean 
 false // boolean

 //NULL
 null // null

 // UNDEFINED
 var name; console.log(name); // undefined because the variable was never assigned to a value
 number(undefined); 

 // NaN
 var notANumber = 7 * "Smith"; // Nan becuase the result of multiplying a number with a string... is not a number

 // INFINITY
 console.log(infinity + 1); // infinity, there is no greater number than infinity
 console.log(-infinity + 1); // infinity, there is no greater number than infinity


 // Copy by Value examples:
   var x = 100; 
   var y = x;
   y = 50;

   console.log(x); // 100


 // Complex Data Types:

 //ARRAY
  let names = ["Gretchen", "Claire", "Neuenhaus"];

  // OBJECT
  let me = { name: "Gretchen" }; 

  // FUNCTION
  function sum (a, b){
    return a + b
  }
  (a, b) => a + b  // also a function (arrow function)

 // Copy by Reference examples:

 //object
  let person = { name: "Gretchen" };
  let admin = person; // one object, two variables referencing it

  admin.name = "Sally" // admin now has access to the object
  person.name= "Sally" // both are able to change the name in the object 

  // array
  let myNames = ["Gretchen", "Claire", "Neuenhaus"];
  let b = myNames // one array, two variables referencing it

  b.unshift("Ms.") // b now has access to the array... ["Ms.", "Gretchen", "Claire", "Neuenhaus"]


