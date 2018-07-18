export const submitOrDie = () => {
	return {
	type: "SUBMIT"
	};
};

export const changeText = (event) => {
	return {
	type: "BOX",
	payload: event.target.value
	};
};