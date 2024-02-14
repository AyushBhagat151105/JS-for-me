const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const DC_heros = ["Superman", "Batman", "Flash"]


// marvel_heros.push(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(DC_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...DC_heros]

// console.log(all_heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real = another_array.flat(Infinity)

console.log(another_array);
console.log(real);


console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush"))
console.log(Array.isArray("Ayush"))  // interesting
