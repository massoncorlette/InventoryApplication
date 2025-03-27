const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query("SELECT * FROM titles");
  return rows;
}

async function getTitlesByGenre(genre) {
  const { rows } = await pool.query("SELECT * FROM titles WHERE genre = $1", [`%${genre}`]
  );
  return rows;
}




module.exports = {
  getAllTitles,
  getTitlesByGenre
};

