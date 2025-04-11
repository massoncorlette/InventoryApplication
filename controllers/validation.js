
const { body } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 5 and 24 characters.";

const alphaErrAlt = "must only contain letters.";
const lengthErrAlt = "must be between 3 and 10 characters.";

const lengthErrTitle = "must be below 20 characters.";
const lengthErrSummary = "must be below 100 characters."


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

function validateTitle() {
  return [
    body("createtitle").trim()
      .isLength({ min: 1, max: 20 }).withMessage(`Name ${lengthErrTitle}`),
    body("titletext").trim()
      .isLength({min: 0, max: 100}).withMessage(`Name ${lengthErrSummary}`),
  ];
}


function validateDirectorAdd() {
  return [
    body("adddirector").trim() 
    .matches(/^[A-Za-z\s]+$/) // use instead of isAlpha to include spaces
    .withMessage(`Director name ${alphaErr}`)
    .isLength({ min: 5, max: 24 }).withMessage(`Name ${lengthErr}`)
  ];
};


function validateGenreAdd() {
  return [
    body("addgenre").trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage(`Genre name ${alphaErrAlt}`)
      .isLength({ min: 3, max: 12 }).withMessage(`Name ${lengthErrAlt}`)
  ];
};




module.exports = { validateDirector, validateTitle, validateGenre, validateDirectorAdd, validateGenreAdd};