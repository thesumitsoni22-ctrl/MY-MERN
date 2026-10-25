/*
Memory of 2 Types:
1.Stack(Primitive)  2.Heap(Non-Primitive)

=> jb v stack memory use hoti hai mean jb v koi variable declare kia uski hme ek copy milti hai

=> jb v memory heap ke andr define hoti hai ya koi obj ya kuch v toh wahan se hme milta hai 
reference original value ka 
*/ 

let myYoutubename = "Sumityoutube.com"

let anothername = myYoutubename
anothername = "web-dev"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "Sumit@gmail.com"
    name: "user@ybl"
}

let usertwo = userOne

usertwo.email = "Sumit123@gmail.com"

console.log(userOne.email);//same value
console.log(usertwo.email);//same value