


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

console.log(loginusermsg("Ayush"))

