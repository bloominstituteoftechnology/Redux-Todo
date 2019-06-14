import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const loadTodoList = () => {
    console.log("loading");
    let todos = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    return todos;
  }

const saveTodoList = (newTodos) => {
    localStorage.setItem('todoList', JSON.stringify(newTodos))
}

const todosList = loadTodoList();


export const reducer = (state = todosList, action) => {
    let newTodos = [];
    switch (action.type) {
        case ADD_TODO:
            newTodos = state.concat(action.payload);
            saveTodoList(newTodos);
            return newTodos;
        case TOGGLE_TODO: 
            newTodos = state.map(todo => {
                if (todo === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
            saveTodoList(newTodos);
            return newTodos;
        case DELETE_TODO:
            newTodos = state.filter(todo => { return todo !== action.payload});
            saveTodoList(newTodos);
            return newTodos;
        default: 
            return state;
    }
         
}



