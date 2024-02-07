const name = 'Ayush '
const repocount = 50

// console.log(name + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Ayush-HCQBS')

console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newgameName = gameName.substring(0, 4)
console.log(newgameName);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trime

const myname = '   Ayush   '
console.log(myname.trim());
console.log(myname);

const url = "https://hitesh.com/noo%20ch"

console.log(url.replace('%20', '-'));

