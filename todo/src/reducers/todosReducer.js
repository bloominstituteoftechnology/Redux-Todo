

const todosReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADDTODO': return [...state, {id: action.id, text: action.text, completed: false}]
    case 'TOGGLETODO':
    return state.map(todo =>
    	(todo.id === action.id)
    	? {...todo, completed: !todo.completed}
    	: todo
    )
    case 'DELETETODO':


    default:
    	return state;
  }
}

export default todosReducer;
