


function symyname(){
    console.log("a");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("y");
}

// symyname()

// function addTwonumbers(number1,number2){
    
//     console.log(number1 + number2);
// }

function addTwonumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwonumbers(3,4)

// console.log("Result:",result);

function loginusermsg(username = "sam"){
    if(!username){
        console.log("pls enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermsg("Ayush"))

function calcartpris(...num1) {
    return num1
}

// console.log(calcartpris(200 ,400 ,500))f

const user = {
    username: "Ayush",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const mynewarray = [200, 400, 100, 600]

function returnSvalu(getArray) {
    return getArray[2]
}

console.log(returnSvalu(mynewarray));