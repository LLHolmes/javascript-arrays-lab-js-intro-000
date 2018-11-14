var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return (kittens.push(name));
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  return (kittens.unshift(name));
}
