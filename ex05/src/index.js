var school = {
  name: "Arena",
  location: 4,
  established: 1,
};

function myFunction(name) {
  school["name"] = name;

  return school;
}

console.log(myFunction("Paragon"));

module.exports = myFunction(school, myFunction);
