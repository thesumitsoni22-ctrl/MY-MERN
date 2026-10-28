// Objects Declaration has 2 ways - AS Literals ans As Constructor

// Singleton => mean koi v constructor se jb hum obj bnate hai toh singleton ek obj bnta hai yani yr apne trh ki ek hi ek obj hai

// Literals se declare krenge toh singleTon nhi bnta hai => Inerview based
// Constructor se obj bnega so haan wo Singleton hota hai => Interview based

// ==========Object Literals======================================


//   Unique DataTypes in Primitive  called as Symbols => Declaration
const mySym = Symbol("key1") // interview => ek symbol lo and usko obj ke keys me use kro add kro and print krke dikha do


//Object.create => constructor method in with single ton forms

const JsUser = {    //curly braces are obj and written in key value format
    name:"Sumit",   // bydefault name here represents as string as "name"
    age:18,  
   // mySym:"mykey1",   //Wrong way of used as Key in obj give as String
    [mySym]:"myKey1", //best way to use symbol as key in obj gives symbol as o/p
    "Full Name":"Sumit S",      
    location:"Nepal",
    email:"Jana@gmail.com",
    isLoggedinDays:false,
    lastLoginDays:["Monday","Saturday"]
}
 console.log(JsUser.email) // right way to fesh data but not best way
 console.log(JsUser["email"]) // Same o/p but best way becoz full name wali value ko (.) dot se acces hi nhi kr skte
 //console.log(JsUser.Full Name) no way to fetch o/p becoz its not best way and  not applicable in each case
console.log(JsUser["Full Name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym]) 

// Objects ki values ko access (.)dot notation se krte hau

// Objects ki values ko change krna is given by equals
JsUser.email = "Sumi@gmail.com"
 
// To lock values for unchange use freeze
//Object.freeze(JsUser)
JsUser.email = "Sumiyt@gmail.com" // not chnges as freeze wrks above
console.log(JsUser)

// Adding Functions func() in Object treated as variables

JsUser.greeting = function(){
    console.log("Namaste")
}

console.log(JsUser.greeting) // jb method denge toh value undefined aati hai
console.log(JsUser.greeting()) // yahan error ayega ki ye abhi func() nhi hai becoz of freeze so comment freeze

// o/p me [Function (anonymous)] type aaya hai mean ki function return back nhi bs uska refernce aaya hai

JsUser.greeting2 = function(){  // obj ke andr name ko reference kr=ne liye greeting message ko string interpulation krn pdega "" to ``
    console.log(`Sat Saheb ${this.name}`) //same obj ko reference ke  liye use this. dot se obj ke andr ki sari properties show ho jayengi and we are free to use
}

console.log(JsUser.greeting2)
console.log(JsUser.greeting2()) // o/p as values with name


