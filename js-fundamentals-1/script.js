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
