const { body } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 5 and 24 characters.";

const alphaErrAlt = "must only contain letters.";
const lengthErrAlt = "must be between 3 and 10 characters.";

const lengthErrTitle = "must be below 40 characters.";
const lengthErrSummary = "must be below 500 characters.";

function validateDirector() {
  return [
    body("directorname")
      .optional({ checkFalsy: true }) 
      .trim()
      .isAlpha("en-US", { ignore: [" ", "-"] })
      .withMessage(`Director name ${alphaErr}`)
      .isLength({ min: 0, max: 24 })
      .withMessage(`Name ${lengthErr}`),
  ];
}



function validateGenre() {
  return [
    body("genrename")
      .optional({ checkFalsy: true }) 
      .trim()
      .isLength({ min: 0, max: 12 })
      .withMessage(`Genre name ${lengthErrAlt}`)
      .isAlpha("en-US", { ignore: [" ", "-"] })
      .withMessage(`Genre name ${alphaErrAlt}`),
  ];
}

function validateTitle() {
  return [
    body("titletext")
      .trim()
      .isLength({ min: 0, max: 40 })
      .withMessage(`Title ${lengthErrTitle}`),
      body("descriptiontext")
      .trim()
      .isLength({ min: 0, max: 500 })
      .withMessage(`Description ${lengthErrSummary}`),
  ];
}

function validateTitleEdit() {

  return [
    ...validateTitle(),
    ...validateDirector(),
    ...validateGenre()
  ];
  
}



module.exports = {
  validateDirector,
  validateTitle,
  validateTitleEdit,
  validateGenre,
};
