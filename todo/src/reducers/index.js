import { ADD_TODO, DELETE_TODO} from '../actions'

export const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // QUESTION: Is there way that you can write this using a syntax similar to what I have written below?
    // return 
    // const newTod = { ...todos, id: action.id, text: action.text, completed: false };
    case DELETE_TODO:
    const newTodos = todos.filter(todo => {
      // QUESTION: What is happening here???
      // I am reading that todo.is is NOT equal to action.id, which is indeed what it was equal to.
      // This is kind of hard for me to wrap my mind around...is there another way to do this?
      return todo.id !== action.id
    });
    return todos = newTodos;
    default:
      return todos; 
  }
}

export default todoReducer;