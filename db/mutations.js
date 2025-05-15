//for updating data
const pool = require("./pool");
const queries = require("./queries");

async function createTitle(title, year, descriptiontext, req) {
  if (descriptiontext == null) {
    descriptiontext = " ";
  }

  console.log(req.params.datatype);

  if (req.params.datatype == "genreadd") {
    const result = await queries.getColumnId(
      "genre_id",
      "genres",
      "genre",
      req.params.datavalue,
    );
    await pool.query(
      "INSERT INTO titles (title, year, description ,genre_id) VALUES ($1, $2, $3, $4)",
      [title, year, descriptiontext, result.genre_id],
    );
  } else if (req.params.datatype == "directoradd") {
    const result = await queries.getColumnId(
      "director_id",
      "directors",
      "name",
      req.params.datavalue,
    );
    await pool.query(
      "INSERT INTO titles (title, year, description, director_id) VALUES ($1, $2, $3, $4)",
      [title, year, descriptiontext, result.director_id],
    );
  } else if (req.params.datatype == "alltitles") {
    await pool.query(
      "INSERT INTO titles (title,year, description) VALUES ($1, $2, $3)",
      [title, year, descriptiontext],
    );
  }
}

async function deleteTitle(id) {
  await pool.query("DELETE FROM titles WHERE titles_id = $1", [id]);
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

async function deleteDirector(id) {
  await pool.query("DELETE FROM titles WHERE director_id = $1", [id]);
  await pool.query("DELETE FROM directors WHERE director_id = $1", [id]);
}

async function createGenre(genre) {
  await pool.query("INSERT INTO genres(genre) VALUES ($1)", [genre]);
}

async function updateGenre(genre, id) {
  await pool.query("UPDATE genres SET genre = $1 WHERE genre_id = $2", [
    genre,
    id,
  ]);
}

async function deleteGenre(id) {
  await pool.query("DELETE FROM titles WHERE genre_id = $1", [id]);
  await pool.query("DELETE FROM genres WHERE genre_id = $1", [id]);
}

async function updateTitle(title, year, description, id, director, genre) {
  try {
    // query for duplicate data for submitted genre and director
    let genreID = await queries.getColumnId(
      "genre_id",
      "genres",
      "genre",
      genre,
    );
    let directorID = await queries.getColumnId(
      "director_id",
      "directors",
      "name",
      director,
    );

    console.log(genre, director);

    // if not found, create the data and get ID
    if (genreID == null && genre.trim() !== "") {
      await createGenre(genre);
      genreID = await queries.getColumnId("genre_id", "genres", "genre", genre);
    }

    if (directorID == null && director.trim() !== "") {
      await createDirector(director);
      directorID = await queries.getColumnId(
        "director_id",
        "directors",
        "name",
        director,
      );
    }
    // finally update title, description and foreign keys
    await pool.query(
      "UPDATE titles SET title = $1 ,description = $2, year = $3 WHERE titles_id = $4",
      [title, description, year, id],
    );

    // if genre and director are not empty update as well
    if (genreID != null) {
      console.log(genreID, "Hi");
      await pool.query(
        "UPDATE titles SET title = $1, genre_id = $2 WHERE titles_id = $3",
        [title, genreID.genre_id, id],
      );
    }

    if (directorID != null) {
      await pool.query(
        "UPDATE titles SET title = $1, director_id = $2 WHERE titles_id = $3",
        [title, directorID.director_id, id],
      );
    }
  } catch (error) {
    console.error("Error updating title", error.message);
  }
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
  deleteGenre,
};
