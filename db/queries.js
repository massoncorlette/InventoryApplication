const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query("SELECT * FROM movies");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchForUsers(searchQuery) {
  const result = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1", [`%${searchQuery}%`]  
  );
  return result.rows; 
}


module.exports = {
  getAllUsernames,
  insertUsername,
  searchForUsers
};

