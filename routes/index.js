const express = require("express");
const { Router } = require("express");
const { displayTitles } = require("../controllers/viewController");
const { handleUpdateGenre, handleUpdateDirector  } = require("../controllers/dataController/updateController");
const { validateDirector, validateGenre } = require("../controllers/validation");

//import controller functions to use here upon routes being used

const indexRouter = Router();
indexRouter.use(express.urlencoded({extended: true}));

indexRouter.get("/", async (req, res, next) => {
  return displayTitles(req, res, next);
});

indexRouter.post("/:director_id/updatedirector", validateDirector(), handleUpdateDirector);
indexRouter.post("/:genre_id/updategenre", validateGenre(), handleUpdateGenre);

// indexRouter.post("/:director_name/adddirector");
// indexRouter.post("/:genre_name/addgenre");



module.exports = indexRouter;