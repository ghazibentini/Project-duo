const { db } = require("./index.js")
const Movie = require("./Movie.js")


const sampleData = require("../../duo-project/data.json");


const insertSampleMovies = function () {
  Movie.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleMovies();