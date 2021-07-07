import { ADD_TASK, TOGGLE_COMPLETED } from "../reducers";

export const addTask = taskName => {
	console.log(taskName);
	return {
		type: ADD_TASK,
		payload: taskName,
	};
};

export const toggleCompleted = index => {
	return {
		type: TOGGLE_COMPLETED,
		payload: index,
	};
};
