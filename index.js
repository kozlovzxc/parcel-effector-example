import { createEvent, createStore } from "effector";

const addTodo = createEvent();
const clearTodoList = createEvent();

const $todos = createStore([])
  // Will update store when addTodo is fired
  .on(addTodo, (list, todo) => [...list, todo])
  // Will reset store to default state when clearTodos is fired
  .reset(clearTodoList);

// Log initial store value and each change
$todos.watch((todos) => {
  console.log("todos", todos);
});
// => todos []

addTodo("go shopping");
// => todos ['go shopping']

addTodo("go to the gym");
// => todos ['go shopping', 'go to the gym']

clearTodoList();
// => todos []
