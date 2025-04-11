const express = require("express");
const { Router } = require("express");
const { displayByDirector } = require("../controllers/viewController");
const { handleCreateTitle } = require("../controllers/dataController/createController");
const { validateTitle } = require("../controllers/validation");

//import controller functions to use here upon routes being used

const directorRouter = Router();
directorRouter.use(express.urlencoded({extended: true}));

directorRouter.get("/:director", async (req, res, next) => {
  return displayByDirector(req, res, next);
});




module.exports = directorRouter;