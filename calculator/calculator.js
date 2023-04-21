const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//__dirname - gives the current file location

app.listen(3001, function () {
  console.log("Server is running on 3001");
});
