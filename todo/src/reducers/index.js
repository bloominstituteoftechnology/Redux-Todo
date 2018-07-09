const initialList = {
  todos: ['fiaofjfa', 'fwfijfjaowfj', 'jfoawjfaf']
}

const todoInput = ''

const listReducer = (state = initialList, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {value: todoInput, complete: false});
    case "HANDLE_CHANGE":
      return 'jyjf'
    default:
      return state;
  }
}

export default listReducer;
