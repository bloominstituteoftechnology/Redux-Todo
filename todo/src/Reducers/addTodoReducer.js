import ADD_TODO from "../Actions/addTodoAction";

const todo = (todo = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return Object.assign([...todo], newTodo);

    default:
      break;
  }
};

export default todo;
