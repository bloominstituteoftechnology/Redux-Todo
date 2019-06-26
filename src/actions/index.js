export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_ITEM = "DELETE_ITEM";

export function newTodo(newItem) {
  //   console.log("Action.js:", newItem);
  return {
    type: NEW_TODO,
    payload: newItem
  };
}

//toggle todo complete
export function toggleComplete(index) {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
}
//Remove specific item when click on the trash
export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index
  };
}
