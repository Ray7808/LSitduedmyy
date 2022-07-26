const todos = ["first todo", "second todo", "third todo"];

const todoModel = {
  getAll: () => {
    return todos;
  },
  get: (id) => {
    return todos[id];
  },
};

module.exports = todoModel;
