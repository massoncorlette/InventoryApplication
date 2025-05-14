//for reading data

const pool = require("./pool");

async function getAllTitles() {
  const { rows } = await pool.query(
    "SELECT * FROM titles ORDER BY titles_id ASC",
  );
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query(
    "SELECT * FROM genres ORDER BY genre_id ASC",
  );
  return rows;
}

async function getAllDirectors() {
  const { rows } = await pool.query(
    "SELECT * FROM directors ORDER BY director_id ASC",
  );
  return rows;
}

async function getTitlesByGenre(genreID) {
  const { rows } = await pool.query(
    "SELECT * FROM titles WHERE genre_id = $1",
    [`${genreID}`],
  );
  return rows;
}

async function getTitlesByDirector(directorID) {
  const { rows } = await pool.query(
    "SELECT * FROM titles WHERE director_id = $1",
    [`${directorID}`],
  );
  return rows;
}

async function getTitleDetails(titleID) {
  let genreName = null;
  let directorName = null;

  const details = await pool.query("SELECT * FROM titles WHERE titles_id = $1", [
    `${titleID}`,
  ]);
  const titleDetails = details.rows[0];
  const title = details.rows[0].title;
  const titleId = details.rows[0].titles_id;
  const titleDescription = details.rows[0].description;


  if (details.rows[0].director_id !== null) {
    director = await pool.query(
      "SELECT name FROM directors WHERE director_id = $1",
      [`${titleDetails.director_id}`],
    );
    directorName = director.rows[0].name;
  }
  if (details.rows[0].genre_id !== null) {
    genre = await pool.query("SELECT genre FROM genres WHERE genre_id = $1", [
      `${titleDetails.genre_id}`,
    ]);
    genreName = genre.rows[0].genre;
  }

  return { title, titleId, titleDescription, directorName, genreName };
}

async function getColumnValue(table, column, ID, IDtype) {
  const name = await pool.query(
    `SELECT ${column} FROM ${table} WHERE ${IDtype} = $1`,
    [`${ID}`],
  );
  if (IDtype === "genre_id") {
    nameValue = name.rows[0].genre;
  } else {
    nameValue = name.rows[0].name;
  }
  return nameValue;
}

async function getColumnId(IDtype, table, column, name) {
  const IDvalue = await pool.query(
    `SELECT ${IDtype} FROM ${table} WHERE ${column} = $1`,
    [`${name}`],
  );

  return IDvalue.rows[0];
}

module.exports = {
  getAllTitles,
  getAllGenres,
  getAllDirectors,
  getTitlesByGenre,
  getTitlesByDirector,
  getTitleDetails,
  getColumnValue,
  getColumnId,
};
