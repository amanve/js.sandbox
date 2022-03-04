let js = 'fun'
// if (js === 'fun') alert('JS is fun to work with!')

console.log('js')
console.log(5 + 5 - 2 * 3)

let firstName = 'Aman'
/* 
Naming conventions - "$" "_" "alphabet"
no symbols like let 5name = 3
or let @name = "aman"
or reserved keywords like "new" "function"
let new="fun" => this is prohibited
let first&name = "Aman" Symbol is prohibited

Best Naming Convention is using CAMEL CASE
*/

let PI = 3.1419
console.log(PI)
console.log(Math.PI) /* Both shows different values */

/*
JS have dynamic typing unlike C,C++ which are static stype 
Value is -
1. Object -- 
    let me={
        name:'Aman',
        age:28
    }

2. Primitive --
    let firstName='Aman'
*/

// PRIMITIVE DATA TYPES
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined - value taken by variable that is not yet defined('empty value')
// 5. Null - also 'empty value'
// 6. Symbol(ES15) - value that is unique and cannot be changed
// 7. BigInt(ES20) - larger integers than the Number type

/* This is multi
 line commenting. */
// This is a single line commenting.

let jsIsFun = true

console.log(typeof true)
console.log(typeof jsIsFun)
console.log(typeof false)
console.log(typeof 'Aman')
console.log(typeof 28)

// overriding above variable
jsIsFun = 'Yes!'
console.log(typeof jsIsFun) /* here it is a string */

let year
console.log(year) /* Undefined empty variable */
console.log(typeof year) /* Undefined empty variable */

year = 1994
console.log(year)
console.log(typeof year)

console.log(typeof null) /* it is an object weired???*/

/* Variable Declaration in JS - 
let, const - ES15
var - older*/

//  "let" variable can change
let age = 28
age = 25

// "const" variable cannot be changed
const birthYear = 1991
// birthYear = 1992 /* not possible to reassign */

// const job /* not possible missing "=" in const declaration */

// "var" should be avoided
var job = 'student' /* legacy */

lastName = 'Verma'
console.log(lastName) /* not recommended; declare the variable */
console.log(typeof lastName)

/* Operators */
const now = 2022
const ageJohn = now - 1994
const ageJane = now - 1990
console.log(ageJohn, ageJane)

console.log(ageJohn * 2, ageJane / 2, ageJohn + ageJane, ageJohn % 5, 2 ** 8)

// String concatenation
const _firstName = 'Aman'
const _lastName = 'Verma'
console.log(_firstName + ' ' + _lastName)

let x = 10 + 5
console.log(x)
x += 2
console.log(x)
x -= 3
console.log(x)
x++
console.log(x)
x--
console.log(x)

// Coparison operator
console.log(ageJohn > ageJane)
console.log(ageJohn < ageJane)
console.log(ageJohn == ageJane)
console.log(ageJohn >= ageJane)
console.log(ageJohn <= ageJane)

console.log(ageJane <= 32)

/* Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

const wtMark = 78
const wtJohn = 110
const htMark = 1.69
const htJohn = 1.95

const bmiMark = wtMark / htMark ** 2
const bmiJohn = wtJohn / htJohn ** 2

// console.log(bmiMark, bmiJohn, bmiMark > bmiJohn ? true : false)

/* if (bmiMark > bmiJohn) {
  console.log(`Bmi Mark is more`)
} else {
  console.log(`Bmi John is more`)
} */

// Shorthand ternary operator
console.log(bmiMark > bmiJohn ? `Bmi Mark is more.` : `Bmi John is more.`)

const FirstName = 'Aman'
const Job = 'developer'
const BirthYear = 1994

// String Literals - pain in arse
const aman =
  "I'm " +
  FirstName +
  ', a ' +
  Job +
  ' ' +
  'and is ' +
  (2022 - BirthYear) +
  " year's old."

console.log(aman)

// Template Literals - ES6 feature
const amanNew = `I'm ${FirstName}, a ${Job} and is ${
  2022 - BirthYear
} year's old.`

console.log(amanNew)

const _age = 15
const isOldEnough = _age >= 18

if (isOldEnough) {
  console.log('You can start driving.😎🚗')
} else {
  const yearsLeft = 18 - _age
  console.log(`Sorry!wait for ${yearsLeft} more years 🙇🏽‍♀️`)
}

const _BirthYear = 1994
let century
if (_BirthYear <= 2000) {
  century = 20 + 'th'
} else {
  century = 21 + 'st'
}
console.log(century)

/* 
\\\\\\Type Conversion\\\\\\
 */
const inputYear = '1994'
console.log(Number(inputYear)) /* type conversion */
console.log(typeof (inputYear + 18)) /* give string output */
console.log(Number(inputYear) + 18)
console.log(String(28), 28)

/* Type Coercion */
console.log('I am ' + 23 + ' years old.')
console.log('I am' + ' 23 ' + 'years old.')
console.log('23' - '10' + 5)
console.log('23' ** '2')

let n = '1' + 1
n -= 1
console.log(n)
