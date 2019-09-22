export const ADD_TODO = 'ADD_TODO';

let nextToDoID = JSON.parse(localStorage.getItem("counter"))+1 || 0;

export const add_todo = (text) => {
  localStorage.setItem("counter", JSON.stringify(nextToDoID))
  return {
    type: ADD_TODO,
    id: nextToDoID++,
    text
  };
};

export default add_todo;