export const ADD_ITEM = 'ADD_ITEM';

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
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({
        ...state,
        todoList: [...state.todoList, action.payload]
      });
    default:
      return state;
  }
};
