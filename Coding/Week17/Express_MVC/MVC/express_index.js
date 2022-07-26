const express = require("express");
const app = express();
const port = 5001;

const todoController = require("./controllers/todo");

// MVC架構
app.set("view engine", "ejs");

//Middleware
// Every middleware need to add next to go to the following procedure
app.use((req, res, next) => {
  console.log("Time:", new Date());
  next();
});

// permission control
//if we add "?admin=1" on the end of the website address
// then we can go through this middleware
// This part can also use function and add into the app.get parameters
app.use((req, res, next) => {
  if (req.query.admin === "1") {
    next();
  } else {
    res.end("Err");
  }
});

app.get("/", (req, res) => {
  res.render("hello.ejs");
});

app.get("/todos", todoController.getAll);
app.get("/todos/:id", todoController.get);
app.get("/test", (req, res) => {
  console.log(req.query); // obtain the query information after the address
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
