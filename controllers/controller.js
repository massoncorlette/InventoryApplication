const db = require("../db/queries");


async function displayTitles(req, res) {
  const titles = await db.getAllTitles();
  res.render("index", {titles:titles});
};

async function displayByGenre(req, res) {
  console.log(req.params);
  const titles = await db.getTitlesByGenre(req.params.genre);
  res.render("index", {titles:titles});

};

async function displayTitleDetails(req, res) {


};


module.exports = {displayTitles, displayByGenre, displayTitleDetails};