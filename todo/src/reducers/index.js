const initialState = {
  todoList: []
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return {
        todoList: [...state.todoList, { ...action.payload, isCompleted: false }]
      };

    case "DELETETODO":
      // below return works but I also tried with splice which works
      // return { todoList: state.todoList.filter( (todo, index) =>  index !== action.payload) };

      // splice needs more lines of code...
      let todoList = [...state.todoList];
      console.log(todoList);
      let splicedItem = todoList.splice(action.payload, 1);
      console.log(todoList);
      return { todoList: [...todoList] };
    // return { todoList: state.todoList.splice(action.payload, 1) };

    case "TOGGLECOMPLETED":
      return {
        todoList: [...state.todoList].map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, isCompleted: !todo.isCompleted };
          } else return todo;
        })
      };

    default:
      return state;
  }
};

export default todoReducers;
