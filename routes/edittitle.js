const express = require("express");
const { Router } = require("express");
const { displayEditTitle } = require("../controllers/viewController");
const { handleDeleteTitle } = require("../controllers/dataController/deleteController");


const editTitleRouter = Router();
editTitleRouter.use(express.urlencoded({ extended: true }));

editTitleRouter.get("/:datatype/:titleid", async (req, res, next) => {
  return displayEditTitle(req, res, next);
});

editTitleRouter.post("/:titleid/deletetitle", handleDeleteTitle);

module.exports = editTitleRouter;
