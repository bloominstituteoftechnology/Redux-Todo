export const ADD_TODO = 'ADD_TODO';

let nextToDoID = 0;
export const add_todo = (text) => {
  return {
    type: ADD_TODO,
    id: nextToDoID++,
    text
  };
};