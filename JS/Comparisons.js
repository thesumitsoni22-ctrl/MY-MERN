// Normal Comparisons
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// tricky Comparisons (btween dierent other datatypes)
console.log("2" > 1) //Always try to compare same datatypes
console.log("02" > 1) //typescript is only strict about all these rules

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
// NOTE : in javascript equality ++, and Comparison <> works differently

// === : not only checks value but checks strictly

console.log("2" === 2) // checks strictly with comparison and datatype also checks and dont allow to converion
console.log("2" == 2) // here conversion takes lace

// NOTE : mostly approach to avoid use these codes insted use clean codes