const express = require("express");
const { Router } = require("express");
const { displayByDirector } = require("../controllers/viewController");
const helpers = require('../public/js/helpers'); 

//import controller functions to use here upon routes being used

const directorRouter = Router();
directorRouter.use(express.urlencoded({extended: true}));

directorRouter.get("/:director", async (req, res, next) => {
  return displayByDirector(req, res, next, helpers);
});

module.exports = directorRouter;