var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};

function myFunction(myObj) {
  //Only change code below this line

  var vegetableValue = myObj["vegetable"];
  var fruitValue = myObj["fruit"];
  var drinkValue = myObj["drink"];

  //Only change code above this line
  return {
    vegetableValue,
    fruitValue,
    drinkValue,
  };
}

console.log(myFunction(myFood));

module.exports = myFunction(myFood);
