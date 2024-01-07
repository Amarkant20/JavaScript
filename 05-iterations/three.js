// for of loop

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // if (greet == " ") {
    //     break
    // }
    // console.log(greet);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// map.set("IN", "India") // i will not insert because it takes unique value

// for (const key in map) {
//    console.log(key);
// }

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObjects = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObjects) {
//     console.log(key, ':-', value);
// }