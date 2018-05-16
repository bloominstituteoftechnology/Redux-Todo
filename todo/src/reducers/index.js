import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.payload];

  case TOGGLE_TODO:
    return state.map((todo) => {
      if (action.payload === todo.id) {
	todo.complete = !todo.complete;
      return todo;
	 
      }
      else {
	return todo;
      }
    });

    default:
     return state;

  }
};


//So it seems that here in the reducer, we refer back to the actions we created. They were sent to the store and now the reducer is telling it how to handle those actions.
	//Most of the examples I've seen use switch (action.type) in the reducer. I suppose this is like an if/then sort of thing. Like in this case return state and payload and in that case figure out whether the todo is complete or not and act accordingly. 
	//Since the reducer always has to return a state, you need a default. Just in case.

	

