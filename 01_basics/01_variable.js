const accountId = 144556
let accoundEmaail = "amarkant@ltts.com"
var accountPassword = "12345"
accountCity = "Lucknow"

// accountId = 2  not allowed 
accoundEmaail = "amarkantsonkar@gmail.com"
accountPassword = "sonkar"
accountCity = "Bengaluru"

let accountState; // what is the value of this variable is undefined



console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accoundEmaail,accountPassword,accountCity,accountState])
