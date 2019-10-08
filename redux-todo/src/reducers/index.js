export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

const initialState = (localStorage.todoList) ? JSON.parse(localStorage.todoList) : {

  todos: [{value: 'abcdefg', completed: false}]

};

export default (state = initialState, action) => {

  let newState = {};

  switch (action.type) {

    case ADD:
      newState = {todos: [...state.todos, action.payload]};
      localStorage.todoList = JSON.stringify(newState);
      return newState;
    case TOGGLE:
      newState = {todos: state.todos.map(item =>{
        return action.id === item.value ? {value: item.value, completed: !item.completed} : item;
      })};
      localStorage.todoList = JSON.stringify(newState);
      return newState;
    default:
      return state;
  }
};
