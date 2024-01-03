
// Primitive : - 
// 7 type : String ,Number, Boolean, null, undefined, Symbol,BiGInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 1386526845555544664n


// Refernce Type (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Amar",
    age: 22,
    place: "Lucknow",
    state: "Uttar pradesh"
}

const myFunction = function(){
    console.log("Hellow World!");
}


let typeOfOperators ={
    Undefined: "undefined",
    Null: "object",
    Boolean: "boolean",
    Number: "number",
    String: "string",
    Object_native_and_does_not_implemented: "object",
    Object_native_or_host_does_not_implemented: "function",
}
// console.table(typeOfOperators)


// ----------------------------------------------------------------------

// Stack(Primitive) and  Heap(Non Primitive) Memory

let myCompanyName = "L&T Technology services"

let anothername = myCompanyName
anothername = "Google"

// console.log(myCompanyName);
// console.log(anothername);

let user1 ={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "amar@google.com"

// console.log(user1.email);
// console.log(user2.email);

 