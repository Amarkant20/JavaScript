//if 

const temperature = 50
if (temperature <= 41) {
    // console.log("Less than 41");
}
else {
    // console.log("Temperature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand 

const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==4) {
    console.log("Allow to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}
