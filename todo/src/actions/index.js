export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODOITEM = 'UPDATE_TODOITEM'

export const addTodo= (id,index) => {
    return {
      type: ADD_TODO,
      payload: index,
     id
    };
  };

  export const updateToDoItem= (id) => {
    return {
      type: UPDATE_TODOITEM,
      payload: id
    };
  };