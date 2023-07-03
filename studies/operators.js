/** 
 OPERATORS
 0: Operators: Operators are pieces parts of code that are used with an expression to evaluate data values or 
 edit outcomes of code. The data values on either side of the operators are called operands. 

 
 1: Types: 
    Arithmetic Operators
    Assignment Operators
    Comparison Operators
    Logical Operators
    Ternary Operators
    Unary Operators
    

 2: Uses: 
    Arithmetic Operators => used to do arithmetic using numbers.
    Assignment Operators => assign the left value of the operator to the right side
    Comparison Operators => The operands can be numerical, string, logical, or object values. These compare 
                            operands and return a Boolean based on if the comparison is true. 
    Logical Operators => typically used with Boolean values to return a boolean value
    Ternary Operators => only operator that only takes three operands. Can use it anywhere you would use a standard operator.
    Unary Operators => only needs one operand. Can come before or after the operand


 * */

// 1. Arithemetic Operators
var x = 2 + 2 // 4 
var y = 4 / 2 // 2 
var z = 2 * 2 // 4
var b = 4 - 2 // 2

// 2. Assignment Operators
var x = y // var x = y 
x += y; //  x = x + y
x -= y; //  x = x - y
x *= y; //  x = x * y
x /= y; //  x = x / y
x %= y; //  x = x % y

// 3. Comparison Operators

3 == "3" // Equal, resolves to true
2 != 4 // Not Equal, resolves to true
3 === "3" // Strictly Equal, resolves to false
2 !== 4 // Strictly Not Equal, resolves to true
4 > 2 // Greater than, resolves to true 
4 >= 4 // Greater than or Equal to, resolves to true 
4 < 2 // Less than, resolves to true 
4 <= 4 // Less than or Equal to, resolves to true 


// 4. Logical Operators

expr1 && expr2 // Logical AND, returns true only if both expressions are true
expr1 || expr2 // Logical OR, returns true only if either of the expressions is true, if both are false, then false


// 5. Urnary Operators
!expr // Logical NOT, this should convert the false operand to true, otherwise still returns true

var num = 17;
typeof num; // typeOf, returns a string of the data type, "number"

- 3 // Negation, precedes the operator and negates it
- true // -1 , works on non numbers as well
- false // -0
