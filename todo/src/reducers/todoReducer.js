import { ADD_TODO, COMPLETE_TOGGLE } from '/.actions';

const initialState = [
  {todos: 'Buy cake for the party', completed: false, id: Date.now() }
];


export default (state = initialState, action) => { 
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload); 
    case COMPLETE_TOGGLE: 
      return state.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, { completed: !todo.completed }); 
        } else {
          return todo
        }
      });
    default:
      return state;      
  }
}; 