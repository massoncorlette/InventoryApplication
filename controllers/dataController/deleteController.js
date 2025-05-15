const mutatations = require("../../db/mutations");
const queries = require("../../db/queries");

async function handleDeleteTitle(req, res) {
  const { titleid } = req.params;

  try {
    const titleDetails = await queries.getTitleDetails(titleid);

    console.log(titleDetails);

    if (titleDetails != null) {
      mutatations.deleteTitle(titleDetails.titleId);
    }

    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

async function handleDeleteAll(req, res) {
  const { datatype } = req.params;
  const { datavalue } = req.params;

  try {
    if (datatype === "genreadd") {
      const id = await queries.getColumnId(
        "genre_id",
        "genres",
        "genre",
        datavalue,
      );
      console.log(id);
      mutatations.deleteGenre(id.genre_id);
    } else {
      const id = await queries.getColumnId(
        "director_id",
        "directors",
        "name",
        datavalue,
      );
      mutatations.deleteDirector(id.director_id);
    }

    res.redirect("/");
  } catch (err) {
    res.status(500).send("error");
  }
}

module.exports = { handleDeleteTitle, handleDeleteAll };
