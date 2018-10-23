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

      return { todoList: state.todoList.filter( (todo, index) =>  index !== action.payload) };

      // return { todoList: state.todoList.splice(action.payload, 1) };

      case "TOGGLECOMPLETED":

      return { todoList: [...state.todoList].map( (todo, index) => {
          if (index === action.payload){
            return {...todo, isCompleted : !todo.isCompleted }
          }
          else
            return todo;
          })
        };

    default:
      return state;
  }
};

export default todoReducers;
