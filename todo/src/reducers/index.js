import { ADDTODO_ITEM } from '../actions';

const initialState = {
	item: ''
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO_ITEM:
			return { ...state, item: action.payload };
		default:
			return state;
	}
};

export default todoReducer;
