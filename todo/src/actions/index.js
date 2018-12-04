import { ADD_TASK, TOGGLE_COMPLETE, CLEAR_COMPLETED } from '../reducers';

export const addTask = (task) => {
	return {
		type: ADD_TASK,
		payload: task
	};
};

export const toggleComplete  = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}