const initialState = {
  todoList: [
    // {
    //   isCompleted: false,
    //   todoText: "1st To Do"
    // }
  ]
};

const todoReducers = (state = initialState, action) => {

  switch (action.type) {
   
    case "ADDTODO":
      // let todos = state.todoList;
      // todos.push(action.payload);
      return {todoList : [...state.todoList, {...action.payload, isCompleted : false}]}  ;

      // return {
      //   todoList: todos,
      //   idCount: state.idCount + 1
      // };

    default:
      return state;
  }
};

export default todoReducers;
