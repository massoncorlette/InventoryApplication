//for updating data
const pool = require("./pool");


async function createTitle(title) {
  await pool.query("INSERT INTO titles (title) VALUES ($1)", [title]);
}

async function updateTitle(title, id) {
  await pool.query("UPDATE titles SET title = $1 WHERE id = $2", [title, id]);
}

async function deleteTitle(title,id) {

}

async function createDirector(director) {

}

async function updateDirector(director, id) {
  await pool.query("UPDATE directors SET name = $1 WHERE director_id = $2", [director, id]);

}

async function deleteDirector(director,id) {
  
}

async function createGenre(genre) {

}

async function updateGenre(genre, id) {
  await pool.query("UPDATE genres SET genre = $1 WHERE genre_id = $2", [genre, id]);

}

async function deleteGenre(director,id) {
  
}

module.exports = {
  createTitle,
  updateTitle,
  deleteTitle,
  createDirector,
  updateDirector,
  deleteDirector,
  createGenre,
  updateGenre,
  deleteGenre
}