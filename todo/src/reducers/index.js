import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.payload];

  case TOGGLE_COMPLETE:
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

//The actions here were sent to the store and now the reducer is telling it how to handle those actions. This has something to do with how the state gets changed during the process of executing this app but I'm a little hazy on this.

	

