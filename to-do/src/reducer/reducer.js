export default function reducer(todos = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos], action.payload;
    case "TOGGLE_TODO":
      return todos.map(t => {
        if (t.get("id") === action.payload) {
          return t.update("isDone", isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return todos;
  }
}
