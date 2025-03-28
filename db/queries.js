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




module.exports = {
  getAllTitles,
  getAllGenres,
  getAllDirectors,
  getTitlesByGenre
};

