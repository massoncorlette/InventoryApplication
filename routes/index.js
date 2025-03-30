const express = require("express");
const { Router } = require("express");
const { displayTitles } = require("../controllers/viewController");

//import controller functions to use here upon routes being used

const indexRouter = Router();
indexRouter.use(express.urlencoded({extended: true}));

indexRouter.get("/", async (req, res, next) => {
  return displayTitles(req, res, next);
});


module.exports = indexRouter;