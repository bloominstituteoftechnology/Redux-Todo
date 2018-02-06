import {ADD_LIST_ITEAM, remove_list_iteam} from '../Actions';
import {CHECK_COMPLETE} from'../Actions';
import {REMOVE_LIST_ITEAM} from '../Actions';


export default (todos = [{value:'first', isComplete:'false'}], action) => {

	switch (action.type) {
		case ADD_LIST_ITEAM:{
			return[
			...todos,
			{value: action.text, isComplete: false}
			];
		}

		case CHECK_COMPLETE: {
			const copyTodo = todos.slice();
			copyTodo.forEach((todo) => {
				if(todo.value === action.iteamToCheck) {
					todo.isComplete = !todo.isComplete;
				}
			});
			return copyTodo;
		}
	    case REMOVE_LIST_ITEAM: {
	    	const filteredTodos = todos.filter((todo) => {
	    		return !(todo.value === action.iteamToRemove);
	    	});
	    	return filteredTodos;
	    }
		
		default:
		return todos;
	}

} 
