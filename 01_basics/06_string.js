const name = "Amarkant"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String Interpulation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Amar-kant-sonkar')
// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);


const newStringOne = "          Amarkant sonkar            "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://amarkant.com/amarkant%20sonkar"
console.log(url.replace('%20', '-'));
console.log(url.includes('amarkant'));
console.log(url.includes('sundar'));

console.log(gameName.split("-")); 