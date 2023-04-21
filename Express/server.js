const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello");
});
app.get("/contact", function (req, res) {
  res.send("contact me : minal@gmail.com");
});
app.get("/about", function (req, res) {
  res.send("My Name Is Minal");
});
app.listen(3001, function () {
  console.log("Server started on port 3001!");
});
