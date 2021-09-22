var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};

function myFunction(myObj) {
  //Only change code below this line

  var vegetableValue = myFood["vegetable"];
  var fruitValue = myFood["fruit"];
  var drinkValue = myFood["drink"];

  //Only change code above this line
  return {
    vegetableValue,
    fruitValue,
    drinkValue,
  };
}

console.log(myFunction());

module.exports = myFunction(myFood);
