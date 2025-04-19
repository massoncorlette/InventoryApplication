const express = require("express");
const { Router } = require("express");
const { displayTitles } = require("../controllers/viewController");
const {
  handleUpdateTitle,
  handleUpdateGenre,
  handleUpdateDirector,
} = require("../controllers/dataController/updateController");
const {
  handleCreateTitle,
  handleCreateGenre,
  handleCreateDirector,
} = require("../controllers/dataController/createController");
const { handleDeleteTitle } = require("../controllers/dataController/deleteController");
const {
  validateDirector,
  validateTitle,
  validateGenre,
  validateDirectorAdd,
  validateGenreAdd,
  validateTitleEdit,
} = require("../controllers/validation");


const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", async (req, res, next) => {
  return displayTitles(req, res, next);
});

indexRouter.post(
  "/:director_id/updatedirector",
  validateDirector(),
  handleUpdateDirector,
);
indexRouter.post("/:genre_id/updategenre", validateGenre(), handleUpdateGenre);

indexRouter.post("/adddirector", validateDirector(), handleCreateDirector);
indexRouter.post("/addgenre", validateGenre(), handleCreateGenre);
indexRouter.post(
  "/:datatype/:datavalue/createtitle",
  validateTitle(),
  handleCreateTitle,
);
indexRouter.post("/:titleid/edittitle", validateTitleEdit(), handleUpdateTitle);
indexRouter.post("/:titleid/deletetitle", handleDeleteTitle);


module.exports = indexRouter;
