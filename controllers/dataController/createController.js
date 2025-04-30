const db = require("../../db/mutations");

const { validationResult } = require("express-validator");

async function handleCreateTitle(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error?", {
      errors: errors.array(),
    });
  }

  const { titletext } = req.body;
  const { descriptiontext } = req.body;
  const { genrename } = req.body;
  const { directorname } = req.body;

  try {
    await db.createTitle(titletext, descriptiontext, req); // getting ID from parsed URL from form action value '
    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

async function handleCreateGenre(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { genrename } = req.body;

  try {
    await db.createGenre(genrename); // getting ID from parsed URL from form action value '
    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

async function handleCreateDirector(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { directorname } = req.body;

  try {
    await db.createDirector(directorname); // getting ID from parsed URL from form action value '
    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

module.exports = { handleCreateTitle, handleCreateGenre, handleCreateDirector };
