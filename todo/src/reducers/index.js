import { ADDTODO, DELETETODO } from "../actions/index";

const loadTodoList = () => {
    let todos = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    return todos;
}

const saveTodoList = (newTodos) => {
    localStorage.setItem('todoList', JSON.stringify(newTodos))
}


const initialTodoArray = loadTodoList();

const todoReducer = (state = initialTodoArray, action) => {
    let newTodos = [];
  switch (action.type) {
    case ADDTODO:
      console.log("ADDTODO");
      newTodos = state.concat(action.payload);
      saveTodoList(newTodos);
      return newTodos;
    case DELETETODO:
        console.log("DELETETODO", state);
        newTodos = state.filter(todo => {return todo.task !== action.payload});
        saveTodoList(newTodos)
        return newTodos;
    default:
      return state;
  }
};

export default todoReducer;
