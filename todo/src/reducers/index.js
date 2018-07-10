import { ADDTASK, CLICKADD } from "../actions/action";

const initialState = {
  tasks: [
    {
      task: "make todo",
      id: 1,
      completed: false
    }
  ],
  newTask: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return Object.assign({}, state, { newTask: action.payload });
    case CLICKADD:
      let clickadd = state.tasks.slice();
      clickadd.push(action.payload);
      console.log("clicked add");
      return Object.assign({}, state, { tasks: clickadd, newTask: "" });
    default:
      return state;
  }
};
