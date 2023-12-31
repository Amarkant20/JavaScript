// let score = "33abc"   // iske case me output NaN aayega
// let score = null // iske case me output 0 aayega
//let score = undefined // iske case me output NaN aayega
let score = false  // iska value true ke liye 1 aor false ke liye 0 aayega

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // iska output upar likha hai

let isLoggedIn = "amar"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/*
1 => true
0 => false
"" => false
"amar" => true

*/

let someNumber = 55

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****************************** Operations *********************

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2**3); // 2 ki power 3
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
//  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 