var myClothes = {
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};

function myFunction(myObj) {
  //Only change code below this line

  var hatValue = myClothes.hat;
  var shirtValue = myClothes.shirt;
  var shoesValue = myClothes.shoes;

  //Only change code above this line
  return {
    hatValue,
    shirtValue,
    shoesValue,
  };
}

console.log(myFunction());

module.exports = myFunction(myClothes);
