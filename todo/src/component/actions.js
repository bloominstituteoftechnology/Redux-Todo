export const ADD_TASK = "ADD_TASK";


export const addTodoAction = task => {
  
  return {type :ADD_TASK , payload:{task:task}
  };
};
