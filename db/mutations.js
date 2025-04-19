//for updating data
const pool = require("./pool");
const queries = require("./queries");

async function createTitle(title, descriptiontext, req) {

  if (descriptiontext == null) {
    descriptiontext = " ";
  }


  if (req.params.datatype == "genreadd") {
    const result = await queries.getColumnId(
      "genre_id",
      "genres",
      "genre",
      req.params.datavalue,
    );
    await pool.query("INSERT INTO titles (title, description ,genre_id) VALUES ($1, $2, $3)", [
      title,
      descriptiontext,
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
      "INSERT INTO titles (title, description, director_id) VALUES ($1, $2, $3)",
      [title, descriptiontext, result.director_id],
    );
  } else {
    await pool.query("INSERT INTO titles (title, description) VALUES ($1, $2)", [title, descriptiontext]);
  }
}

async function deleteTitle( id) {
  await pool.query("DELETE title FROM titles WHERE titles_id = $1", [id])
}

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

async function updateTitle(title, description, id, director, genre) {

  try {
    // query for duplicate data for submitted genre and director
    let genreID = await queries.getColumnId("genre_id", "genres", "genre", genre);
    let directorID = await queries.getColumnId("director_id", "directors", "name", director);

    // if not found, create the data and get ID
    if (genreID == null && genre != null) {
      await createGenre(genre);
      genreID = await queries.getColumnId("genre_id", "genres", "genre", genre);
   
    }

    if (directorID == null && director != null) {
      await createDirector(director);
      directorID = await queries.getColumnId("director_id", "directors", "name", director);
    }
    // finally update title, description and foreign keys
    await pool.query("UPDATE titles SET title = $1 ,description = $2, director_id = $3, genre_id = $4 WHERE titles_id = $5", [title, description,directorID.director_id, genreID.genre_id, id]);

  } catch (error) {
    console.error("Error updating title", error.message);
  }
};

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
