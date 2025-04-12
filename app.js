const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));  //enables body data to be parsed in dataController.js middleware clean sanitize 


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/styles"));

const indexRouter = require("./routes/index");
const genreRouter = require("./routes/genre");
const directorRouter = require("./routes/director");
const detailsRouter = require("./routes/details");
const titleRouter = require("./routes/createtitle");

app.use("/", indexRouter);
app.use("/genre", genreRouter);
app.use("/director", directorRouter);
app.use("/details", detailsRouter);
app.use("/:datatype/createtitle", titleRouter);
//route for edit/add title


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});