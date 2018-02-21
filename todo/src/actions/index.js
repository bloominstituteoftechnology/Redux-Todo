export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const COMPLETE_TODO_ITEM = 'COMPLETE_TODO_ITEM';

let todoID = 0;
export const add_todo_item = (text) => {
  return {
    type: ADD_TODO_ITEM,
    payload: text,
    todoID: todoID++
  };
};

export const complete_todo_item = (todoID) => {
  return {
    type: COMPLETE_TODO_ITEM,
    id: todoID,
  };
}