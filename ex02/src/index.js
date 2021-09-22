var myClothes = {
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};

function myFunction(myObj) {
  //Only change code below this line

  var hatValue = myObj.hat;
  var shirtValue = myObj.shirt;
  var shoesValue = myObj.shoes;

  //Only change code above this line
  return {
    hatValue,
    shirtValue,
    shoesValue,
  };
}

console.log(myFunction(myClothes));

module.exports = myFunction(myClothes);
