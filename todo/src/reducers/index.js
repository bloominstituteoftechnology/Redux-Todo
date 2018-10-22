const initialState = {
    todoList : [
    {id : new Date(),
    todoText : "1st To Do"}
    ]
};
  
  const todoReducers = (state = initialState, action) => {
    console.log('Inside reducer', action, state);
    switch (action.type) {
      case 'ADDTODO':
        let todos = state.todoList;
        todos.push(action.payload);
        return { todoList : todos };
      default:
        return state;
    }
  };
  
  export default todoReducers;