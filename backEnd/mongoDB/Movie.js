const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Plot: String,
  Country: String,
  Awards: String,
  Poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

let movie = () => {
  return movie.find();
};

module.exports = Movie;
