var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};

function myFunction(propName, propVal) {
  lion[propName] = propVal;
  return lion;
}

console.log(myFunction("roar", "roar-roar"));

module.exports = myFunction;
