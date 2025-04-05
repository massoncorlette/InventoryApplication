//controller for data mutations
//DATA MUST GO THROUGH EXPRESS VALIDATOR CHAIN

const db = require("../db/mutations");

const { body , validationResult} = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 5 and 24 characters.";

const validateDirector = [
  body("directorname").trim()
    .isAlpha().withMessage(`Director name ${alphaErr}`)
    .isLength({ min: 5, max: 24 }).withMessage(`Name ${lengthErr}`)
];

exports.updateDirector = [
  validateDirector,
  (req, res) => {
    console.log(req.params);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400);
      // add error message
    }
    const { directorname } = req.body;
    const { director_id } = req.params;
    db.updateDirector( directorname, director_id );  // getting ID from parsed URL from form action value
    res.redirect("/");
  }
];

const alphaErrAlt = "must only contain letters.";
const lengthErrAlt = "must be between 3 and 10 characters.";

const validateGenre = [
  body("genrename").trim()
    .isAlpha().withMessage(`Genre name ${alphaErrAlt}`)
    .isLength({ min: 3, max: 10 }).withMessage(`Name ${lengthErrAlt}`)
];

exports.updateGenre = [
  validateGenre,
  (req, res) => {
    console.log(req.params, "test");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400);
      // add error message
    }
    const { genrename }  = req.body;
    console.log(genrename);
    const { genre_id } = req.params;
    console.log(genre_id);
    db.updateGenre( genrename, genre_id );  // getting ID from parsed URL from form action value
    res.redirect("/");
  }
]


//editByGenre

//editByDirector

//editByTitle
