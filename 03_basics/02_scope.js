//var c = 200
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a)
   
}

// console.log(a);
// console.log(a);
// console.log(b)


function one(){
    const username = "Amar"
    function two(){
        const website = "youtube"
        // console.log(username);

    }
    // console.log(website);

    two()
}
one()

if(true){
    const username = "Amar"
    if(username === "Amar"){
        const website = " Youtube Chanel"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num +1
}

console.log(addTwo(5)); // error aayega 
const addTwo = function(num){
    return num + 2
}