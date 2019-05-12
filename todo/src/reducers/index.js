import {
  TO_DO_CREATE,
  TO_DO_COMPLETE,
  TO_DO_DELETE,
  TO_DO_CLEAR
} from "../actions";

const initialState = {
  toDos: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TO_DO_CREATE:
      return taskCreate(state, action);
    case TO_DO_COMPLETE:
      return taskToggle(state, action);
    case TO_DO_DELETE:
      return taskDelete(state, action);
    case TO_DO_CLEAR:
      return taskClear(state, action);
    default:
      return state;
  }
};

function taskCreate(state, action) {
  return {
    toDos: [
      ...state.toDos,
      {
        description: action.task,
        id: Date.now(),
        complete: false
      }
    ]
  };
}
function taskToggle(state, action) {
  return {
    toDos: state.toDos.map(task => {
      if (task.id === action.id) {
        task.complete = !task.complete;
      }
      return task;
    })
  };
}

function taskDelete(state, action) {
  return {
    toDos: state.toDos.filter(task => task.id !== action.id)
  };
}

function taskClear(state, action) {
  return {
    toDos: state.toDos.filter(task => !task.complete)
  };
}
