const db = require("../db/queries");


async function displayTitles(req, res) {
  const titles = await db.getAllTitles();
  console.log("Titles: ", titles);
  res.send("Titles: " + titles.map(title => title.title).join(", "));
};


module.exports = {displayTitles};