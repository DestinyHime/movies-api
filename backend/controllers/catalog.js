const Movie = require("../models/Movie");
const ErrorResponse = require("../utils/errorResponse");

//@access public
exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getByCategory = (req, res, next) => {
  const category = req.params.category;
  Movie.find({ category: { $regex: category, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.searchByTitle = (req, res, next) => {
  //const title = req.params.title;
  Movie.find({ title: { $regex: req.query.title, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getMovieById = (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) =>
      res.status(200).json({
        success: true,
        movie,
      })
    )
    .catch((error) => next(error));
};
