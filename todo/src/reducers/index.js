let idNum = 0;
const todos = [
  {
    value: "Example",
    completed: false,
    id: idNum++
  },
  {
    value: "Example 2",
    completed: false,
    id: idNum++
  }
];

const itemReducer = (
  todos = [
    {
      value: "",
      completed: false,
      id: idNum++
    }
  ],
  action
) => {
  console.log("inreducer", action, state);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        { value: action.payload, completed: false, id: idNum++ }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default itemReducer;
