const name = "Sumit"
const repoCount = 20

console.log(name + repoCount + " Value") // concatination but not best way

// `` => it is backticks used in modern way for concatination in backend called String
//  interpulation and important isliye hai q ki jaise mughe koi method lagana hai 
// ${name.toUpperCase} type to use kr skte hai.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Declaration of String(Best way from above way)
const gameName = new String('S_umit')
console.log(gameName)
console.log(gameName[0]) // key value pair accessing
console.log(gameName.__proto__);

// important methods
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,3)//it doesn,t obey neg values and always start from 0
console.log(newString)

const anotherString = gameName.slice(0,3)
console.log(anotherString)

const tripleString = gameName.slice(-5,3)
console.log(tripleString)

const newStringOne = "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())// removes the spaces , trimStart(),trimEnd()
console.log(newStringOne.trimEnd())
 
const url = "https://Sumit.com/Sumit%20Mumma"
console.log(url.replace('%20','_'))
console.log(url.includes('Mumma'))

// Split method => based on spaces
const newOpr = new String('Sum_it_Mumma')
console.log(newOpr)
console.log(newOpr.split('_'))