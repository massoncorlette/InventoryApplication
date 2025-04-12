//controller for view

const db = require("../db/queries");

async function displayTitles(req, res, next ) {
  const titles = await db.getAllTitles();
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors, req:req});
};

async function displayAddTitle(req, res, next) {
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("createtitle", { genres:genres, directors:directors, req:req});
};

async function displayByGenre(req, res, next ) {
  const titles = await db.getTitlesByGenre(req.params.genre);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors, req:req});
};

async function displayByDirector(req, res, next) {
  const titles = await db.getTitlesByDirector(req.params.director);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors, req:req});
};

async function displayTitleDetails(req, res, next) {
  const titleDetails = await db.getTitleDetails(req.params.details);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("details", {titleDetails:titleDetails, genres:genres, directors:directors, req:req});
};

module.exports = {displayTitles, displayAddTitle, displayByGenre, displayByDirector, displayTitleDetails};