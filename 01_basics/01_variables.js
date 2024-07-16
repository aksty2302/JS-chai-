const accountId = 1609
let accountEmail = "akshay@gmail.com"
var accountPassword = 123456
accountCity = "Jaipur"

let accountState

// accountId = 0211 // not allowed

console.log(accountId)

/* prefer not to use var
because of issue in block scope and functional scope */

accountEmail = "akshay@google.com"
accountPassword = 144553
accountCity = "Pta nhi"

console.table([accountEmail, accountPassword, accountCity, accountState])