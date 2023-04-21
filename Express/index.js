const express = require("express");
const app = express(); // return the object of express
// app.get();
// app.post();
// app.put();
// app.delete();

app.get("/", (req, res) => {
  res.send("Hello ");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
app.listen(3002, () => console.log("listening on port 3002!"));
