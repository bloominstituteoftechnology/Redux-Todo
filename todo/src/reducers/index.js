import { ADD_ITEM, CHECK_BOX } from "../actions";

const initialState = {
  todos: [
    {
      value: "Do the dishes.",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
    let valueMap = state.todos.map(x => x.value);
  switch (action.type) {
    case ADD_ITEM:
        if (valueMap.includes(action.payload.value)){
            return;
        }
      return { todos: [...state.todos, action.payload] };
    case CHECK_BOX:
      let clickedIDX = valueMap.indexOf(action.payload.value);
      action.payload.completed = !state.todos[clickedIDX]['completed']
      let altered = [...state.todos]
      altered.splice(clickedIDX, 1, action.payload)
      return { todos:  altered};

    default:
      return state;
  }
};
