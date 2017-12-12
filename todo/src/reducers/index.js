// import { ADD_TODO, NEW_TODO, addTodo, updateNewInput } from '../actions';

const initialState = {
  todos: [],
  newInput: ""
};

const updateLocalStorage = (data) => {
  window.localStorage.setItem("todos", JSON.stringify(data.todos));
};


const reducer = (state = initialState, action) => {

  let newState;

  switch (action.type) {

    case 'ADD_TODO':
      newState = Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.todo,
            completed: false
          }
        ],
        newInput: state.newInput
      });
      updateLocalStorage(newState);
      return newState;

    case 'TOGGLE_TODO':
      newState = Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.index),
          { 
            text: state.todos[action.index].text,
            completed: !state.todos[action.index].completed
          },
          ...state.todos.slice(action.index + 1)
        ]
      });
      updateLocalStorage(newState);
      return newState;

    case 'DELETE_TODO':
      newState = Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      });      
      updateLocalStorage(newState);
      return newState;

    case 'NEW_INPUT':
      return {
        todos: state.todos,
        newInput: action.input
      }

    case 'UPDATE_STORAGE':
      window.localStorage.setItem("todos", JSON.stringify(state.todos));
      return state;

    default:
      return state;

  }
}; 

export default reducer;