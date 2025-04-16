//for updating data
const pool = require("./pool");


async function createTitle(title, req) {


  await pool.query("INSERT INTO titles (title) VALUES ($1)", [title]);

  console.log(req.params)


  //need to pull key value here to upate title ID properties in titles table if for genre or directors


}

async function updateTitle(title, id) {
  await pool.query("UPDATE titles SET title = $1 WHERE id = $2", [title, id]);
}

async function deleteTitle(title,id) {

}

async function createDirector(director) {
  await pool.query("INSERT INTO directors(name) VALUES ($1)", [director]);
}

async function updateDirector(director, id) {
  await pool.query("UPDATE directors SET name = $1 WHERE director_id = $2", [director, id]);
}

async function deleteDirector(director,id) {
  
}

async function createGenre(genre) {
  await pool.query("INSERT INTO genres(genre) VALUES ($1)", [genre]);

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