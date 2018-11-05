import { ADD_TODO } from './action';

const initialState = {
  todos:[
    {
      id:Date.now(),
      todo:"buy milk",
      completed:false
    }
    
  ] 
};

export default ( state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          todo: action.payload.todo,
          id: Date.now(),
          completed: false
        }
      ]
    });
    default:
    return state;
  }
}