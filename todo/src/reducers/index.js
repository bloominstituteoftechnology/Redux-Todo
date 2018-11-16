import ADD_TODO from '../actions';

const initialState = [{task: 'Learn Redux', completed: false, id: Date.now()}];

export default todoReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TODO:
			//take todo from action payload and concat the state with it
			return state.concat(action.payload);
		default:
			return state;
	}
};

//Redux allows you to think about your code before you write it. 