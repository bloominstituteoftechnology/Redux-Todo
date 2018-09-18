// action creator :
export const handleChange = value => ({
  type: "HANDLE_CHANGE",
  payload: value
});

export const addTodo = text => ({
  type: "ADD_TODO",
  payload: text
});
