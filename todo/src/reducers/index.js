export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

const initialState = {
  todoList: [
    {
      id: 1,
      name: 'Figure Out This Redux Magic',
      completed: false
    },
    {
      id: 2,
      name: 'Add Some Styling',
      completed: false
    },
    {
      id: 3,
      name: 'Save To LocalStorage',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  let updatedToDoList;
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({
        ...state,
        todoList: [...state.todoList, action.payload]
      });
    case TOGGLE_COMPLETE:
      updatedToDoList = state.todoList.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
          return item;
        }
        return item;
      });
      return Object.assign({ ...state, todoList: updatedToDoList });
    case REMOVE_COMPLETED:
      updatedToDoList = state.todoList.filter(item => !item.completed);
      return Object.assign({ ...state, todoList: updatedToDoList });
    default:
      return state;
  }
};
