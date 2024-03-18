const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/index");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running");
});
