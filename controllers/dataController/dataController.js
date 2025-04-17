//controller for data mutations
//DATA MUST GO THROUGH EXPRESS VALIDATOR CHAIN

const db = require("../../db/mutations");

const { validationResult } = require("express-validator");

async function handleUpdateDirector(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { directorname } = req.body;
  const { director_id } = req.params;

  try {
    await db.updateDirector(directorname, director_id); // getting ID from parsed URL from form action value '
    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

async function handleUpdateGenre(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { genrename } = req.body;
  const { genre_id } = req.params;

  try {
    await db.updateGenre(genrename, genre_id); // getting ID from parsed URL from form action value '
    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

module.exports = { handleUpdateGenre, handleUpdateDirector };
