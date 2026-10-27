const score = 400

// new keyword ka use krke ek obj bnakr hum explicitely kisi ko number ya specific kuch auer bna skte hai
const balance = new Number(100)
//console.log(balance);

const balance1 = new String(100)
//console.log(balance1);

//console.log(balance.toString())

// console.log(balance.toString().length)
// console.log(balance.toFixed(5)) // imp for e-commerse website

const otherNumber = 23.3456
//console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // represent given no. with comas in US type
// console.log(hundreds.toLocaleString('en-IN')) // represents in indian system

//--------------------------MATHS---------------------------------------------------------
// Maths library js ke sath aati hai by default

// console.log(Math)
// console.log(Math.abs(-4))//convert in absolute values like negative to positive value
// console.log(Math.round(4.4));//round off the value
// console.log(Math.ceil(4.4))//round of as up 
// console.log(Math.floor(4.9))//round of as down

// console.log(Math.min(5,3,8,6,3))
// console.log(Math.max(4,3,5,8,9.4,9))

console.log(Math.random()) //0 & 1 value mostly decimal

console.log((Math.random()*10 )+ 1) 
//mean ek digit shift ho jati hi but jaise ki value aai 0.1 so wahan 0 aati hai shifting se
// toh usko avoid krne liye + 1 ka use kr liya so mean mera value 1 se upr kitna v aage ho skta hai

console.log(Math.floor(Math.random()*4 )+ 1)

// random 0 wala issue me kbbhi min max ke concept ka use
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
