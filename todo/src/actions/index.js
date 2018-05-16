export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let todoID = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      todo:text,
      complete: false,
      id: todoID++
    }
  };

};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

//It is my understanding that actions don't actually do anything, they just hold the recipe for the reducers to follow.
	//The actions should have a type and payload. I am not gonna lie, I got the todoID++ from the example in the redux documentation - I probably wouldn't have gotten this by myself. But it makes sense to me because this action is for adding new todo's so the id should increment for each one. I set the payload to complete: false by default because who adds a todo item if they've already done it?
	//The toggle was easier though I originally had the const and type named different things for reasons I can't remember. I changed them all to be the same.
