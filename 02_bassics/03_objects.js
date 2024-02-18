// singleton

// object literals 
// Object.create
const mysym = Symbol("key1")

const Jsuser = {
    name:"Ayush",
    age: 18,
    [mysym]: "key1",
    location:"Gujrat",
    email: "brbrb.com",
    isLoggedIn: false,
    lastloginDays:["Monday","Saturday"]
}


// console.log(Jsuser["email"])
// console.log(Jsuser["location"])
// console.log(typeof Jsuser[mysym])

// Jsuser.email = "lolol@chatgpt.com"
// Object.freeze(Jsuser)
// Jsuser.email = "lol@chatgpt.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hii js user");
}

Jsuser.greetingtwo = function(){
    console.log(`Hii js user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
