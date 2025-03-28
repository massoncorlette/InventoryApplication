const db = require("../db/queries");


async function displayTitles(req, res) {
  const titles = await db.getAllTitles();
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors});
};

async function displayByGenre(req, res) {
  const titles = await db.getTitlesByGenre(req.params.genre);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors});

};

async function displayByDirector(req, res) {
  const titles = await db.getTitlesByDirector(req.params.director);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("index", {titles:titles, genres:genres, directors:directors});

};

async function displayTitleDetails(req, res) {
  const title = await db.getTitleDetails(req.params.title);
  const genres = await db.getAllGenres();
  const directors = await db.getAllDirectors();
  res.render("details", {title:title, genres:genres, directors:directors});
};


module.exports = {displayTitles, displayByGenre, displayByDirector, displayTitleDetails};