const user = {
    username: "Amarkant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Amar"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Amar"
//     console.log(this.username);

// }
// chai()


// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2) // implicit return 

const addTwo = (num1, num2) => ({username: "Amar"})  // object return

console.log(addTwo(3,4));