const initial = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Learn how to code.',
      completed: false
    },
    {
      value: 'Zelda',
      completed: false
    }
  ],
  text: ''
};

const reducer = (state = initial, action) => {
	switch(action.type) {
		case "SUBMIT":
		console.log(state.todos)
		return {...state, todos:[...state.todos, {value:state.text, completed: false}], text:''};

		case "FORM":
		return {...state, text: action.payload}
		default:
			return state;
	}
};

export default reducer;