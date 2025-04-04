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

}

async function deleteDirector(director,id) {
  
}

module.exports = {
  createTitle,
  updateTitle,
  deleteTitle,
  createDirector,
  updateDirector,
  deleteDirector
}