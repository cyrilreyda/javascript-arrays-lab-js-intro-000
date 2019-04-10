var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
const destructivelyAppendKitten = (kitten) => kittens.push(kitten);

const destructivelyPrependKitten = (kitten) => kittens.unshift(kitten);

const destructivelyRemoveLastKitten = () => kittens.pop();

const destructivelyRemoveFirstKitten = () => kittens.shift();

let kittensUpdated = [...kittens];

const appendKitten = (name) => kittensUpdated.push(name);


