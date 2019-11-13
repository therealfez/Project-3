const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const trippinSeed = [
  {
    place: "Austin",
    image: "https://placehold.it/200x200",
    description: "Blah Blah Blah Blah"
  },

  {
    place: "Austin",
    image: "https://placehold.it/200x200",
    description: "Blah Blah Blah Blah"
  },

  {
    place: "Austin",
    image: "https://placehold.it/200x200",
    description: "Blah Blah Blah Blah"
  },

];

db.Trippin
  .remove({})
  .then(() => db.Trippin.collection.insertMany(trippinSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
