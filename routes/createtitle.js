const express = require("express");
const { Router } = require("express");
const { displayAddTitle } = require("../controllers/viewController");

const newTitleRouter = Router();
newTitleRouter.use(express.urlencoded({extended: true}));

newTitleRouter.get("/", async (req, res, next) => {
  return displayAddTitle(req, res, next);
});

module.exports = newTitleRouter;