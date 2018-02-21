export const DELETE_TODO = 'DELETE_TODO';

export const delete_todo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};