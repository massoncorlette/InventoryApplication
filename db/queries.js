const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query("SELECT * FROM titles");
  return rows;
}

async function getTitlesByGenre(genreID) {
  const { rows } = await pool.query("SELECT * FROM titles WHERE genre_id = $1", [`${genreID}`]);
  return rows;
}




module.exports = {
  getAllTitles,
  getTitlesByGenre
};

