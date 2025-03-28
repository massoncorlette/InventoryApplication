const express = require("express");
const { Router } = require("express");
const { displayByGenre } = require("../controllers/controller");

//import controller functions to use here upon routes being used

const genreRouter = Router();
genreRouter.use(express.urlencoded({extended: true}));

genreRouter.get("/:genre", async (req, res, next) => {
  return displayByGenre(req, res, next);
});

module.exports = genreRouter;