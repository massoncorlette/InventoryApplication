const db = require("../db/queries");


async function displayTitles(req, res) {
  const titles = await db.getAllTitles();
  console.log("Titles: ", titles);
  res.render("index", {titles:titles});
};


module.exports = {displayTitles};