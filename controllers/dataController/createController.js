
const db = require("../../db/mutations");

const { validationResult} = require("express-validator");

async function handleCreateTitle(req, res, next) {
  
  const { director_id} = req.params;

  const { genre_id} = req.params;

  if (director_id !== null) {
    console.log(director_id);
  } else if (genre_id !== null) {
    console.log(genre_id);
  } else {
    console.log("nothing")
  }

}

async function handleCreateGenre(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { addgenre }  = req.body;

  try {
    await db.createGenre( addgenre );  // getting ID from parsed URL from form action value '
    res.redirect("/");  
  } catch (err){
    res.status(500).send('error');
  }
};

async function handleCreateDirector(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("error", {
      errors: errors.array(),
    });
  }

  const { adddirector }  = req.body;

  try {
    await db.createDirector( adddirector );  // getting ID from parsed URL from form action value '
    res.redirect("/");  
  } catch (err){
    res.status(500).send('error');
  }
};




module.exports = { handleCreateTitle, handleCreateGenre, handleCreateDirector};