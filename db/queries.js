const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query("SELECT * FROM titles");
  return rows;
}




module.exports = {
  getAllTitles
};

