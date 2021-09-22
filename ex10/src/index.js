function myFunction() {
  //Only change code below this line
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "System Of A Down",
      title: "Toxicity",
      release_year: 2001,
      formats: {
        1: "CD",
        2: "LP",
        3: "8T",
      },
      gold: true,
    },
  };
  //Only change code above this line
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
