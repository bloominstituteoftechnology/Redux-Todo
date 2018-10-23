export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODOITEM = 'UPDATE_TODOITEM'

export const addToDo= (value, toDoArray) => {
    return {
      type: ADD_TODO,
      value,
      toDoArray
    };
  };

  export const updateToDoItem= (value, completed) => {
    return {
      type: UPDATE_TODOITEM,
      value,
      completed
    };
  };