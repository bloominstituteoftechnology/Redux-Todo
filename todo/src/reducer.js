const initial = {
newTodo:'',
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
			return console.log('called!');
		default:
			return state;
	}
};

export default reducer;