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
};

module.exports = { handleDeleteTitle };

