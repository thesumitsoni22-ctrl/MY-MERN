//--------------Date-------------------
let myDate = new Date()
//console.log(myDate); //Date in messed way

// console.log(myDate.toString()); //Date in managed way
// console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());// Slach lgake date show hota hai locak ki trh
//  console.log(myDate.toLocaleString());// slash datw , time
//  console.log(myDate.toLocaleTimeString()); //Only time

//  typeOf myDate => interview question
console.log(typeof myDate); // it is an object

//let myCreatedDate = new Date(2026,0,24) // Month start from 0 in JS
//console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2026,0,24,5,3)
//console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2023-04-22")
//console.log(myCreatedDate2.toLocaleString()) // dd-mm-yy me month 1st se star hota hai

// TimeStamp in JS => use in poll creating and finding ki kon fasly poll kiya quiz generate krne me

let myDateStamp = Date.now()
console.log(myDateStamp) // long digit is a mili second 1st jan 1970 se tk ka
console.log(myCreatedDate2.getTime()) // mean yahan tk ki time from that 1970 im milisec

// so ab hum chahe to dono dates ko comapre v kr skta hoon

// ----milisecond date in seconds
// console.log(Date.now()/100)// comes in point so use math concept of round off or floor
// console.log(Math.floor(Date.now()/100)) // comes in sec

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long",       // mean isme apna suggestion de skte hai ki aise properties hme chahiye
    dayPeriod :"narrow"    // ctrl+space se properies option aate hai
                           // localString format hi dega but prop ke accor aur unique kr dega
})