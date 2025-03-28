const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/styles"));

const indexRouter = require("./routes/index");
const genreRouter = require("./routes/genre");

app.use("/", indexRouter);
app.use("/genre", genreRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});