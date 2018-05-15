export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

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
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

// It is my understanding that actions are the "what happened" part of the app. The "how it happened" part is in the reducer. It seems we are using the actions here to describe the payload we want to ship to the store.
// I guess we're getting the data from the components?
