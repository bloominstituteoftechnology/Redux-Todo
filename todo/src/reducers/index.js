import { ADDTODO_ITEM } from '../actions';

const initialState = {
	list: [
		{
			task: 'Organize Garage',
			id: 1528817077286,
			done: true
		},
		{
			task: 'Bake Cookies',
			id: 1528817084358,
			done: false
		}
	],
	inputText: '',
	newTask: '',
	value: ''
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO_ITEM:
			return {
				list: [
					{
						task: 'Organize Garage',
						id: 1528817077286,
						done: true
					},
					{
						task: 'Bake Cookies',
						id: 1528817084358,
						done: false
					}
				],
				inputText: '',
				newTask: '',
				value: ''
			};
		default:
			return state;
	}
};

export default todoReducer;
