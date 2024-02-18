// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Ayush"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ayush",
            lastname: "bhagat"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },

]
users[1].email
console.log(users);

console.log(Object.keys(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));