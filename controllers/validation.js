
const { body } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 5 and 24 characters.";

const alphaErrAlt = "must only contain letters.";
const lengthErrAlt = "must be between 3 and 12 characters.";

function validateDirector() {
  return [
    body("directorname").trim() 
    .matches(/^[A-Za-z\s]+$/) // use instead of isAlpha to include spaces
    .withMessage(`Director name ${alphaErr}`)
    .isLength({ min: 5, max: 24 }).withMessage(`Name ${lengthErr}`)
  ];
};

function validateGenre() {
  return [
    body("genrename").trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage(`Genre name ${alphaErrAlt}`)
      .isLength({ min: 3, max: 12 }).withMessage(`Name ${lengthErrAlt}`)
  ];
};

module.exports = { validateDirector, validateGenre};