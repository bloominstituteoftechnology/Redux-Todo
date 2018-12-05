export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

const initialState = (localStorage.todoList) ? JSON.parse(localStorage.todoList) : {

  todos: [{value: 'abcdefg', completed: false}]

};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD:
      const newState = {todos: [...state.todos, action.payload]};
      localStorage.todoList = JSON.stringify(newState);
      return newState;
    case TOGGLE:
      const newState2 = {todos: state.todos.map(item =>{
        return action.id === item.value ? {value: item.value, completed: !item.completed} : item;
      })};
      localStorage.todoList = JSON.stringify(newState2);
      return newState2;
    default:
      return state;
  }
};
