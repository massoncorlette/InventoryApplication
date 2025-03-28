const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query("SELECT * FROM titles");
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getAllDirectors() {
  const { rows } = await pool.query("SELECT * FROM directors");
  return rows;
}

async function getTitlesByGenre(genreID) {
  const { rows } = await pool.query("SELECT * FROM titles WHERE genre_id = $1", [`${genreID}`]);
  return rows;
}

async function getTitlesByDirector(directorID) {
  const { rows } = await pool.query("SELECT * FROM titles WHERE director_id = $1", [`${directorID}`]);
  return rows;
}

async function getTitleDetails(titleID) {
  const { title } = await pool.query("SELECT * FROM titles WHERE titles_id = $1", [`${titleID}`]);
  return title;
}

module.exports = {
  getAllTitles,
  getAllGenres,
  getAllDirectors,
  getTitlesByGenre,
  getTitlesByDirector,
  getTitleDetails
};

