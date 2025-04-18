//controller for view

const db = require("../db/queries");

async function displayTitles(req, res, next) {
  const titles = await db.getAllTitles();
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  const inputPlaceHolder = "all titles";
  res.render("index", {
    titles: titles,
    genres: genres,
    directors: directors,
    req: req,
    namevalue: inputPlaceHolder,
  });
}

async function displayAddTitle(req, res, next) {
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("createtitle", { genres: genres, directors: directors, req: req });
}

async function displayEditTitle(req, res, next) {
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  const titleDetails = await db.getTitleDetails(req.params.titleid);
  res.render("edittitle", { genres: genres, directors: directors, titleDetails:titleDetails, req: req });
}

async function displayByGenre(req, res, next) {
  const titles = await db.getTitlesByGenre(req.params.genre);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  const genreName = await db.getColumnValue(
    "genres",
    "genre",
    req.params.genre,
    "genre_id",
  );
  res.render("index", {
    titles: titles,
    genres: genres,
    directors: directors,
    req: req,
    namevalue: genreName,
  });
}

async function displayByDirector(req, res, next) {
  const titles = await db.getTitlesByDirector(req.params.director);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  const directorName = await db.getColumnValue(
    "directors",
    "name",
    req.params.director,
    "director_id",
  );
  res.render("index", {
    titles: titles,
    genres: genres,
    directors: directors,
    req: req,
    namevalue: directorName,
  });
}

async function displayTitleDetails(req, res, next) {
  const titleDetails = await db.getTitleDetails(req.params.details);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("details", {
    titleDetails: titleDetails,
    genres: genres,
    directors: directors,
    req: req,
  });
}

module.exports = {
  displayTitles,
  displayAddTitle,
  displayEditTitle,
  displayByGenre,
  displayByDirector,
  displayTitleDetails,
};
