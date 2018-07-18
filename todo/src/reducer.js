const initial = {
todos:[
{
  value: 'Walk the dog.',
  completed: false
},
{
value: 'Learn how to code.',
completed: false
},
{
value: 'League of legends demonstration!',
completed: false
}
	]
};

const reducer = (state = initial, action) => {
	switch(action.type){
		case "SUBMIT":
		let copy = state.todos.slice()
		copy.push(
		{
			value:action.payload,
			completed:false
		}
		);
		return Object.assign({},state,{todos:copy})
		default:
			return state;
	}
};

export default reducer;