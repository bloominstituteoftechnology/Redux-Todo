export const ADDTASK = "ADD_TASK";
export const CLICKADD = "CLICK_ADD";

export const addTask = input => {
  return {
    type: ADDTASK,
    payload: input
  };
};

export const clickAdd = list => {
  return {
    type: CLICKADD,
    payload: list
  };
};
