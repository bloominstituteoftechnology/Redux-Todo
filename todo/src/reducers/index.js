import {
  ADDTASK,
  CLICKADD,
  TOGGLECOMPLETED,
  CLEARCOMPLETED
} from "../actions/action";

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
    case TOGGLECOMPLETED:
      let togglecompleted = state.tasks.slice();
      togglecompleted.map(toggle => {
        if (toggle.id === action.payload) {
          toggle.completed = !toggle.completed;
          return toggle;
        }
      });
      return Object.assign({}, state, { tasks: togglecompleted });
    case CLEARCOMPLETED:
      let tasks = state.tasks.slice();
      tasks = tasks.filter(task => !task.completed);
      return Object.assign({}, state, { tasks: tasks });
    default:
      return state;
  }
};
