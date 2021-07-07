// action creator :
export const handleChange = value => ({
  type: "HANDLE_CHANGE",
  payload: value
});

export const addTodo = text => ({
  type: "ADD_TODO",
  payload: text
});

export const toggleCompleted = id => ({
  type: "TOGGLE_COMPLETED",
  payload: id
});
