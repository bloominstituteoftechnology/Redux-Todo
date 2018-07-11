//Import the action strings from actions to prevent typing errors
import { ADD_TODO, TOGGLE_COMPLETION } from '../actions';

//Initialize the state
// const initialState = {todos: [{text: ['learning redux'], completed:false}, ]}
const initialState = {todos:[{value:'Learning Redux', id:1, completed:false}]}

//Create a reducer with state,action
const todosReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    //Create a new add Todo.
    case ADD_TODO:
      // Since it's an an array, we start by opening an array.
      // The first argument makes a copy (using spread),
      // Therefore it doesn't mutate the original array.
      // Then we can add the new todo object into the array 
      let addNewTodo = [...state.todos, {value:action.payload, id: state.todos.length+1, completed:false}]

      // We then use Object.assign, to create a brand new state object to ensure no mutation again
      // Gotta keep my shit PURE!!!!
      return Object.assign( {}, {todos:addNewTodo} )

    //Toggle the completed field
    case TOGGLE_COMPLETION:
      //OK this shit was gangsta right here, finally fuckin understand spread!!!!!
      // The first thing to do is to make a copy using spread and put it into an array
      // We then map over it looking for the id that we passed into the click handler which is now on the payload
      // When we do find it, we need to toggle completed, so we again, make a copy using spread, except this time it's an object
      // We can just update the property of the object we wish to change, which is in this case, completion.
      // If we don't find the id, just pass back the entire todo!
      let toggledTodo = [...state.todos].map( todo => (todo.id === action.payload) ? {...todo, completed:!todo.completed} : todo )

      return Object.assign( {}, {todos:toggledTodo} )
      default:
      return state;
  }
};

//Export the full reducer
export { todosReducer };