let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0, 3)
// let myCreatedDate = new Date(2024, 0, 3, 17, 13)
let myCreatedDate = new Date("2024-01-03")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.toLocaleString());

// `${newDate.getDay()} and the time ${newDate.getTime()}`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
   
}))