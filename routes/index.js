const express = require("express");
const { Router } = require("express");
const { displayTitles } = require("../controllers/viewController");
const { handleUpdateGenre, handleUpdateDirector  } = require("../controllers/dataController/dataController");
const { handleCreateGenre, handleCreateDirector } = require("../controllers/dataController/createController");
const { validateDirector, validateGenre, validateDirectorAdd, validateGenreAdd } = require("../controllers/validation");

//import controller functions to use here upon routes being used

const indexRouter = Router();
indexRouter.use(express.urlencoded({extended: true}));

indexRouter.get("/", async (req, res, next) => {
  return displayTitles(req, res, next);
});

indexRouter.post("/:director_id/updatedirector", validateDirector(), handleUpdateDirector);
indexRouter.post("/:genre_id/updategenre", validateGenre(), handleUpdateGenre);

indexRouter.post("/adddirector", validateDirectorAdd(), handleCreateDirector);
indexRouter.post("/addgenre", validateGenreAdd(), handleCreateGenre);


module.exports = indexRouter;