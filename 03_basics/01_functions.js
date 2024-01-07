const myName = function () {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("R");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("T");
}
// myName();


function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
// addTwoNumbers(5,7)
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("Amar");  // it will never print because after return keywords nothing will print
}

const result = addTwoNumbers(5, 4)
// console.log("Result: ",result);

function loginUserMessage(username = "Bot") {
    // if(username === undefined){

    // }
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); 
// console.log(loginUserMessage("Amar"));


function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000,3000))

const user = {
    username: "Amar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"Amar",
//     price: 200
// })

const myNewArray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200,300,400,600]))