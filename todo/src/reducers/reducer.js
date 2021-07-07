export const initialState = {
  todos: [
    {
      id: 0,
      task: 'Do not die',
      completed: false
    }
  ],
  inputText: ''
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }

     case 'HANDLE_CHANGE':
      return { ...state, inputText: action.payload };
    
    default:
      return state;
  }
}