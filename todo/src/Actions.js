export const submitForm = () => {
	return {
	type: "SUBMIT"
	};
};

export const addTodo = (event) => {
	return {
	type: "FORM",
	payload: event.target.value
	};
};