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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400);
      // add error message
    }
    const { firstName, lastName, email, age, bio } = req.body;
    db.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

//editByGenre

//editByDirector

//editByTitle
