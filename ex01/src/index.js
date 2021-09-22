var myPet = {
  species: "American Shorthair Cat",
  name: "Minnie",
  legs: 4,
  friends: ["Dodik", "Bakir"],
};

function myFunction(myObj) {
  //Only change code below this line
  return myObj;
  //Only change code above this line
}

console.log(myFunction(myPet));

module.exports = {
  myPet,
  myFunction,
};
