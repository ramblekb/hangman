// letter=castMember 
// movie=word
// main=guess

// Requiring our movie module exported from movie.js
var Word = require("./word.js");

// Creating a new Movie with our constructor and storing it in theMatrix
var theMatrix = new Word("The Matrix", "Action, Sci-Fi", "63 Million");

// Logging out some initial information about the theMatrix object
console.log("What movie is it?");
console.log(theMatrix.movieName + "\n");
console.log("What's its budget?");
console.log(theMatrix.budget + "\n");
console.log("Who's in it?");
console.log(JSON.stringify(theMatrix.cast, null, 2) + "\n");

// Calling the addCastMember method on our theMatrix object
theMatrix.addLetter("female", "Carrie-Anne Moss", "Trinity");

// Checking to see who's in the movie now
console.log("Who's in it?");
console.log(JSON.stringify(theMatrix.cast, null, 2) + "\n");

// Adding more cast members to the movie
console.log("Adding new cast members...\n");
theMatrix.addLetter("male", "Keanu Reeves", "Neo");
theMatrix.addLetter("male", "Laurence Fishburne", "Morpheus");
theMatrix.addLetter("female", "Gloria Foster", "The Oracle");
theMatrix.addLetter("male", "Hugo Weaving", "Agent Smith");

// Logging all of the movie's cast members
console.log("Who's in it now?");
console.log(JSON.stringify(theMatrix.cast, null, 2) + "\n");

// Logging information about each cast member using their `readProfile` method
console.log("Can you tell me more about the cast?\n");
for (var i = 0; i < theMatrix.cast.length; i++) {
  theMatrix.cast[i].readProfile();
}
