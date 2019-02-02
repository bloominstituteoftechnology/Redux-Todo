import { TOGGLE } from "./../actions/";
export default function reducer() {
  switch (action.type) {
    case TOGGLE:
      return {
        todoList: [{ todo: "learn redux", id: 0, completed: false }],
        newTodo: ""
      };
  }
}
