//for updating data
const pool = require("./pool");
const queries = require("./queries");

async function createTitle(title, req) {
  if (req.params.datatype == "genreadd") {
    const result = await queries.getColumnId(
      "genre_id",
      "genres",
      "genre",
      req.params.datavalue,
    );
    await pool.query("INSERT INTO titles (title, genre_id) VALUES ($1, $2)", [
      title,
      result.genre_id,
    ]);
  } else if ((req.params.datatype = "directoradd")) {
    const result = await queries.getColumnId(
      "director_id",
      "directors",
      "name",
      req.params.datavalue,
    );
    await pool.query(
      "INSERT INTO titles (title, director_id) VALUES ($1, $2)",
      [title, result.director_id],
    );
  } else {
    await pool.query("INSERT INTO titles (title) VALUES ($1)", [title]);
  }
}

async function updateTitle(title, id) {
  await pool.query("UPDATE titles SET title = $1 WHERE id = $2", [title, id]);
}

async function deleteTitle(title, id) {}

async function createDirector(director) {
  await pool.query("INSERT INTO directors(name) VALUES ($1)", [director]);
}

async function updateDirector(director, id) {
  await pool.query("UPDATE directors SET name = $1 WHERE director_id = $2", [
    director,
    id,
  ]);
}

async function deleteDirector(director, id) {}

async function createGenre(genre) {
  await pool.query("INSERT INTO genres(genre) VALUES ($1)", [genre]);
}

async function updateGenre(genre, id) {
  await pool.query("UPDATE genres SET genre = $1 WHERE genre_id = $2", [
    genre,
    id,
  ]);
}

async function deleteGenre(director, id) {}

module.exports = {
  createTitle,
  updateTitle,
  deleteTitle,
  createDirector,
  updateDirector,
  deleteDirector,
  createGenre,
  updateGenre,
  deleteGenre,
};
