const todoModel = require("../models/todo");
const todoController = {
  getAll: (req, res) => {
    const todos = todoModel.getAll();
    res.render("todos", {
      todos,
    });
  },
  get: (req, res) => {
    const id = req.params.id;
    const todo = todoModel.get(id);
    res.render("todo", {
      todo,
    });
  },
};

module.exports = todoController;
