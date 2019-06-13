export const ADDTASK = "ADD_TASK";
export const CLICKADD = "CLICK_ADD";
export const TOGGLECOMPLETED = "TOGGLE_COMPLETED";
export const CLEARCOMPLETED = "CLEAR_COMPLETED";

export const addTask = input => {
  return {
    type: ADDTASK,
    payload: input
  };
};

export const clickAdd = newTask => {
  return {
    type: CLICKADD,
    payload: newTask
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLECOMPLETED,
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED
  };
};
