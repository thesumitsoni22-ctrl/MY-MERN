let score ="33" 

console .log(typeof score) // 33 as number
console .log(typeof (score)) //"33" as string

let valueInNumber = Number(score) // "33" represented as number
console .log(typeof valueInNumber) 
console .log(valueInNumber) 

let score2 ="33abc" 
let valueInNumber2 = Number(score2) // "33" represented as number
console .log(typeof valueInNumber2) 
console .log(valueInNumber2) // but it cant return the no. as there is abc too

let score3 =null
let valueInNumber3 = Number(score3)
console .log(typeof valueInNumber3) 
console .log(valueInNumber3) // it gives 0

let score4 =undefined 
let valueInNumber4 = Number(score4)
console .log(typeof valueInNumber4) 
console .log(valueInNumber4) // it gives nan

let score5 =false //boolean 
let valueInNumber5 = Number(score5)
console .log(typeof valueInNumber5) 
console .log(valueInNumber5) // it gives 0

let score6 ="Sumit"//string 
let valueInNumber6 = Number(score6)
console .log(typeof valueInNumber6) 
console .log(valueInNumber6) // it gives nan

let isLoggedIn = 1 // "" => false, "Sumit" => true, 0 => false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof someNumber)