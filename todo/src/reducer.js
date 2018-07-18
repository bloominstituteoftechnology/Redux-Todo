const initial = {
textBox:'',
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
		console.log(state)
		return {
			...state,
			todos:[...state.todos,{value:state.textBox,completed:false}],
			textBox:''
		}
		case "BOX":
		return {
		...state,
		textBox:action.payload
		};
		default:
			return state;
	}
};

export default reducer;