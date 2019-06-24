export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';


export function addTodo(newTodo){
  console.log(newTodo)

    return {
    type: ADD_TODO,
    payload: {task: newTodo, completed: false}}
}


export function toggleTodo(idx) {
    // console.log("bk: toggleFriend: ", idx);
    return {
      type: "TOGGLE_TODO",
      payload: idx
    };
  }