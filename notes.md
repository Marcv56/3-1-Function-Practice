// JAVA is a CHALLANGE
console.log("hello world");

// JAVA SCRIPT DATA TYPES
// 1. Boolean

console.log(true)
console.log(false)
console.log (10>5)
console.log()
// thre are certain values  in JSthat evaluate to false- they are falsy
// *.undefined
// *.null
// *.+0, -0, n0
// *.false
// *.string of length 0 e.g. ""

// null
// represents an object that is not defined
// you can empty an object by setting it's value to null
// type of null is object

// undefined
// represents a value that is not defined
// you can empty an object by setting it's value to null(both the value and type is undefined)

// number represnets a number that does not make sense
// console.log(typeof NaN);

// string
// 'cool'
// "cool"
// "That was 'cool'"
// 'echo' "Hello, World"
// "That was \"cool"\"

// JavaScript Variables
// declar a Variable
var name

// Assign a value to a Variable
name= 'Sammy'

// declare and assign a value to a variable in one line
var name = 'Sammy';

// Decalre and assign calues to multiple variables at the same time
var age=12, favoriteColor='pruple', name='Sally'

// varible naming
// first character a-z, A-Z, $,_
// the other letters can be letters,numbers,$_
// variables are case sensitive
// The convention, but NOT! the rule is to capitalize each word after the first

// var
// decalares a varible, optionaly initializing its value
// subject to hoisting

// let
// decalares a block-scoped, local variable. optionaly initializing it's values
// not subject to hoisting

// const
// declares a block-scoped, read-only name constant
// not subject to hoisting

console.log(fruit);
var furit='apple'

var name;
console.log(name);

// EXPRESSIONS
// An expression is code that evalutes to a value
// value is an expression
//

// operators
// operators act on values to produce new values

// arithmetic
// +,=,*,/

// Comparison
// ==,===,!=,!==,>,<,>=,<=
// loose(THEY COERECE TO TYPE)
// strict (DO NOT COERECE)

// LOGICAL
// logical NOT (!)
// logical OR (||)
// logical AND (&&)

// FUNCTIONS
// zero or more explicit parameters
// zero or more arguments
// exactly one return value,
// undefined by default(ending a function with return will return undefined)

//  FUNCTION DECLORTATION
// *****OLD WAY******
// 1. funtion keword
// 2. funtion name
// 3. parameter list(optional)
// 4. funtion body
funtion sum (num1, num2){
  return num1+num2
}
sum(2,4);

// FUNCTION EXPRESSION OLD WAY

var name = function (num1, num2) {
  return num1+num2;

}

// FAT ARROW FUNCTION SYNTAX
let sum= (num1, num2)=> num1+num2;
sum (5,9);
// Blue print for FATARROW
// **let myFunction= () => {}; **

********************************************************************************

// object
// a collection of key value pairs

let dog = {name: `koda`, color: `khaki`, age: 5, speak: ()=>alert(`woof`)}
dog.speak()
console.log(dog.color);

dog.favoriteToy = `cow hide bone`;
console.log(dog);



console.log(dog[`name`]);

let selection = window.prompt("what property fo you want","");
// at this point the selection is equal to what the user typed in the prompt

// ARRAY []
let movies = [`Toy Story`, 'The Joker', 'John Wick'];
********************************************************************************
// // FUNCTION CONTRACT//
//
//
// // 1. Where do inputs come from?
// // 2. What is your output?
// // 3. Write a one-line purpose statement
// // 4. Write a type contract that states the functions name and the names and
// // types of is parameters and return value
//
// // fuction description
// // parameter description
// // return description
//
// function name (parameter){
//
// }
//
// // calculates the square of a number
// // num is a Number to square
// // returns the square
//
// function square (num) {
//
//
// }
//
// // 5. write the body of the function
// function square (num) {
//   let result = num * num;
//   return square;
// }
//
// let square = (num) => {
//   let result = num * num;
//   return result;
// }
//
// let square = num => num * num;
//
//
// // 6. Run the function and check the results
// // console.log(square(2));


// ****************SCOPE************

var name = 'Marcos'

fuction greeting() {
  var name = 'Lyla';
console.log(`Hello, $(name)`);
}
