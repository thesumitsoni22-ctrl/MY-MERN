/* Data memory me kis trh store ho rhi hai uske basic pr data 2 types ke hote hai

 1.Primitive

 All the primitives are call by value, mean jb v hum inhe copy krte hai toh inka original data
 reference memory ka nhi diya jata , inko copy krke diya jata hai alag and if changes krte hai 
 so copy me changes hota hai.

7 types = String,Number,Boolean,Null,Undefined,Symbol(for Uniqueness),BigInt

2.Non-Primitive or Reference type

it means ki memory me inka reference directly allocate kiya ja skta hai

Array,Objects,functions

*/

const { useImperativeHandle } = require("react")

/* Note : JavaScript ek dynamically typed language hai kyunki isme variables ka koi fixed data 
         type pehle se declare nahi karna padta. Isme data type ka faisla code run hote waqt
         (runtime par) usme store hone wali value ke basis par hota hai. Aap ek hi variable me
         pehle number aur baad me bina kisi error ke string store kar sakte hain kyunki type variable
         ka nahi balki value ka hota hai. Yeh feature code likhne ko kaafi flexible aur fast bana
         deta hai, halanki bade projects me isse bugs ka khatra bhi rehta hai.
  */

// ---------------------Primitive Datatypes----------------------------
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //result diff
const anotherId = Symbol('123') //result diff

console.log(id === anotherId) // false becoz here used symbol for uniqueness

const bigNumber = 356684564785684n //last me n lagane se wo bigInt me change ho jata hai

// ------------------Non Primitive Datatypes-------------------------------------------------
const heros = {"Shaktiman","nagraj","doga"}

let myObj = {
    name:"Sumit",
    age:22
}

const myFunction = function(){
console.log("Hello world!")
}

console.log(typeof myFunction) //non-primitive datatypes ka return type object hi aata hai

