const express = require("express");
const app = express();
const port = 5001;

const todoController = require("./controllers/todo");

// MVC架構
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("hello.ejs");
});

app.get("/todos", todoController.getAll);
app.get("/todos/:id", todoController.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
