//controller for data mutations
//DATA MUST GO THROUGH EXPRESS VALIDATOR CHAIN

const db = require("../db/mutations");

const { body , validationResult} = require("express-validator");


const alphaErr = "must only contain letters.";
const lengthErr = "must be between 5 and 24 characters.";

const alphaErrAlt = "must only contain letters.";
const lengthErrAlt = "must be between 3 and 10 characters.";


function validateDirector() {
  return [
    body("directorname").trim() 
    .matches(/^[A-Za-z\s]+$/) // use instead of isAlpha to include spaces
    .withMessage(`Director name ${alphaErr}`)
    .isLength({ min: 5, max: 24 }).withMessage(`Name ${lengthErr}`)
  ];
};

async function handleUpdateDirector(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send('error: letters and spaces only');
    // add error message
  }

  const { directorname }  = req.body;
  const { director_id } = req.params;

  try {
    await db.updateDirector( directorname, director_id );  // getting ID from parsed URL from form action value '
    res.redirect("/");  
  } catch (err){
    res.status(500).send('error');
  }
}



function validateGenre() {
  return [
    body("genrename").trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage(`Genre name ${alphaErrAlt}`)
      .isLength({ min: 3, max: 16 }).withMessage(`Name ${lengthErrAlt}`)
  ];
};

async function handleUpdateGenre(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send('error: letters and spaces only');
    // add error message
  }

  const { genrename }  = req.body;
  const { genre_id } = req.params;

  try {
    await db.updateGenre( genrename, genre_id );  // getting ID from parsed URL from form action value '
    res.redirect("/");  
  } catch (err){
    res.status(500).send('error');
  }
}

module.exports = { handleUpdateGenre, validateGenre, handleUpdateDirector, validateDirector  };

