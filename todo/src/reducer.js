
const initial = {
	todos:[
	{
  value: 'Walk the dog.',
  completed: false
},
{
  value: 'Finish the code.',
  completed: false
}
	]
}

const reducer = (state = initial, action) => {
	switch(action.type){
		case "SUBMIT_DATA":
		console.log(state.todos);
	return Object.assign({},state, {completed : !state.todos[0].completed} );
		default:
			return state;
	}
};

export default reducer;