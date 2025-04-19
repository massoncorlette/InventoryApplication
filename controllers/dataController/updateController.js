//controller for data mutations
//DATA MUST GO THROUGH EXPRESS VALIDATOR CHAIN

const db = require("../../db/mutations");

const { validationResult } = require("express-validator");

// handleUpdateTitleDetails
// can use query methods in case for duplicate data?
async function handleUpdateTitle(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { titletext, descriptiontext, directorname, genrename } = req.body;
  const { titleid } = req.params;

  try {
    await db.updateTitle(titletext, descriptiontext, titleid, directorname, genrename);
    res.redirect("/");

  } catch (err) {
    res.status(500).send("error");
  }
}


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
};

module.exports = { handleUpdateTitle, handleUpdateGenre, handleUpdateDirector };
