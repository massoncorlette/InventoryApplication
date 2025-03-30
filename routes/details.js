const express = require("express");
const { Router } = require("express");
const { displayTitleDetails } = require("../controllers/viewController");
const helpers = require('../utils/helpers'); 

//import controller functions to use here upon routes being used

const detailsRouter = Router();
detailsRouter.use(express.urlencoded({extended: true}));

detailsRouter.get("/:details", async (req, res, next) => {
  return displayTitleDetails(req, res, next, helpers);
});

module.exports = detailsRouter;