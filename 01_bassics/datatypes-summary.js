//  Primitive

// 7 types : String, Number, Boolearn, Null, Undefind, Symbol(Like ID in HTML), BigInt

const score = 100
const scoreValue = 100.3

const isloggedin=false
const outsideTemp = null


const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

const bigNumbers = 62652745768949849894945489564851967618n

console.log(bigNumbers);

//  Referense (Non Primitive)

// Array, Objects, Functions

const heros = ["ironman", "superman"]
let myObj = {
    name:"Ayush",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stacj(Primitive), Heap(For Non-P) this 2 is type of memmory

// ex

let myYoutubename = "LUCIFET"

let anouthername = myYoutubename
anouthername = "Chai or Lucifer"
console.log(anouthername);
console.log(myYoutubename);

// heap
let userone = {
    email: "user@google.com",
    upi: "user@ybl",
}

let usertwo = userone

console.log(userone.email);
