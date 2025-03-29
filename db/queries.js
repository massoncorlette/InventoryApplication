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
  console.log(titleID);
  const title = await pool.query("SELECT * FROM titles WHERE titles_id = $1", [`${titleID}`]);
  const titleDetails = title.rows[0] ;
  const titleName = title.rows[0].title;
  const genre = await pool.query("SELECT genre FROM genres WHERE genre_id = $1", [`${titleDetails.genre_id}`]);
  const genreName = genre.rows[0].genre;
  const director = await pool.query("SELECT name FROM directors WHERE director_id = $1", [`${titleDetails.director_id}`]);
  const directorName = director.rows[0].name;
  return {titleName, genreName, directorName};
}

module.exports = {
  getAllTitles,
  getAllGenres,
  getAllDirectors,
  getTitlesByGenre,
  getTitlesByDirector,
  getTitleDetails
};

