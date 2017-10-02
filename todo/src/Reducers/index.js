import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, CHECK_COMPLETE } from '../Actions';

const initialState = [{value:'first', isComplete:false},{value:'second', isComplete:false},{value:'third', isComplete:false}];
export default (todos = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM: 
      return [
        ...todos,
        {value: action.payload, isComplete: false }
      ];
    case CHECK_COMPLETE:{
      const copyTodo = todos.slice();
      copyTodo.forEach((todo) => {
        if(todo.value === action.itemToCheck) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return copyTodo;
    }
    case REMOVE_LIST_ITEM: {
      const filteredTodos = todos.filter((todo) => {
        return !(todo.value === action.itemToRemove);
      });
      
      return filteredTodos;
    }

    default:
      return todos;
  }
}