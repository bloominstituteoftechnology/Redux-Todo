//Import the action strings from actions to prevent typing errors
import { ADD_TODO } from '../actions';

//Initialize the state
// const initialState = {todos: [{text: ['learning redux'], completed:false}, ]}
const initialState = {todos:[{value:'Learning Redux', id:1, completed:false}]}

//Create a reducer with state,action
const todosReducer = (state = initialState, action) => {

  console.log('Action in Reducer:', action)
  
  switch (action.type) {
    case ADD_TODO:
      let addNewTodo = [...state.todos, {value:action.payload, id: state.todos.length+1, completed:false}]
      return Object.assign( {}, {todos:addNewTodo} )
    default:
      return state;
  }
};

//Export the full reducer
export { todosReducer };