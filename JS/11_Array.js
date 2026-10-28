// Array
// NOTE : JS arrays are resizable array

// const myArr = [0,4,5,2,6,true,"Sumit"]
const myArr = [0,1,2,3,4,5]
const myHeros = ["Sumo","naagraaj"]

// Shallow copy :Sirf top-level copy karta hai. Nested object ka reference (address) same rehta hai.
// Deep copy :Har ek cheez ko naye memory space me copy karta hai. Original bilkul safe rehta hai.

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[0]) // 0 based indexing & in JS it generates shallow copy when use copy oper. instead of deep copy

// Array Methods

// myArr2.push(6)
// console.log(myArr2)

// myArr2.push(7)
// console.log(myArr2)

// myArr2.pop()
// console.log(myArr2)

//console.log(myArr)
myArr.unshift(9)
//console.log(myArr) //another no. add on but at start that prlm to shift all element

myArr.shift() //removes 1st element
//console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5))
// console.log(myArr.indexOf(19)) // -1 o/p mean not availabe in array

const newArr = myArr.join() // joins and converts intom string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// =====Slice,Splice=========

//console.log("A ",myArr)

const myn1 = myArr.slice(1,3) 

// console.log(myn1)
// console.log("B " , myArr)

const myn2 = myArr.splice(1,3)
// console.loh("C " ,myn1)
// console.log(myn2) 


// Slice vs Splice (The Main Difference)

// • slice (No Change): Yeh array ka ek tukda kaat kar nikalta hai, par original array ko touch nahi karta (original array bilkul same rehta hai).
// • splice (Mutates/Changes): Yeh original array ke andar se elements ko kaat kar bahar nikal deta hai (yaani original array chota ho jata hai ya badal jata hai).

// ===============Array part 2================================

const heros = ["Sanu","Ranu","Manu"]
const zeros = ["kalu","Bonu","Polu"]

//heros.push(zeros)

// console.log(heros) // array in array as element
// console.log(heros[3][2]) //Polu o/p

// const heros2 = heros.concat(zeros) //add all array element  as one array  elements
// console.log(heros2)

//  Another easy method of concat using spread method

const heros2 = [...heros,...zeros] //... means one one element spread as glass breaked
//console.log(heros2)

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(Infinity) // analyse krke no. dena best hota hai
console.log(real_another_Array)

console.log(Array.isArray("Sumit"))
console.log(Array.from("Sumit")) //convert in array

console.log(Array.from({name : "Sumit"})) // interview based -.o/p me empty braces dega or btana pdega ki keys ka arry bnana hai ki kuch aur ka

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))



