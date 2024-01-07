// Objects 

// singleton: -  agar hum object ko literal ki tarah decelare krte hai toh sing;eton nahi banta hai aur constructor se banega toh singleton banega



// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Amar",
    "full name": "Amarkant sonkar",
    [mySym]: "mykey1",
    age: 24,
    location: "Bangalore",
    email: "amarkantsonkar@ltts.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "amarkant.sonkar@ltts.com"
// console.log(JsUser["email"])
// Object.freeze(JsUser)
JsUser.email = "amarkant.sonkar@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
