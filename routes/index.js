const express = require("express");
const { Router } = require("express");
//import controller functions to use here upon routes being used

const indexRouter = Router();
indexRouter.use(express.urlencoded({extended: true}));

indexRouter.get("/", (req, res) => {
  res.send("test");
})

module.exports = indexRouter;