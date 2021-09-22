function myFunction(myObj, checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else return "Not Found";
}

console.log(
  myFunction(
    { title: "Titanik", song: "My Heart Will Go On", genre: "drama" },
    "title"
  )
);
console.log(
  myFunction(
    { title: "Titanik", song: "My Heart Will Go On", genre: "drama" },
    "song"
  )
);
console.log(
  myFunction(
    { title: "Titanik", song: "My Heart Will Go On", genre: "drama" },
    "genre"
  )
);
console.log(
  myFunction(
    { title: "Titanik", song: "My Heart Will Go On", genre: "actor" },
    "actor"
  )
);

module.exports = myFunction;
