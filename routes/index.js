const express = require("express");
const { Router } = require("express");
const { displayTitles } = require("../controllers/viewController");
const helpers = require('../utils/helpers'); 

//import controller functions to use here upon routes being used

const indexRouter = Router();
indexRouter.use(express.urlencoded({extended: true}));

indexRouter.get("/", async (req, res, next) => {
  return displayTitles(req, res, next, helpers);
});


module.exports = indexRouter;