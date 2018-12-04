export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

const initialState = {

  todos: [{value: 'abcdefg', completed: false}]

};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD:
      return {todos: [...state.todos, action.payload]};
    case TOGGLE:
      return {todos: state.todos.map(item =>{
        return action.id === item.value ? {value: item.value, completed: !item.completed} : item;
      })}
    default:
      return state;
  }
};
