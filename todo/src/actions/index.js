export const ADDTODO = "ADDTODO";
export const SETCOMPLETED = "SETCOMPLETED";
export const DELETETODO="DELETETODO";

export const addTodo = (friend) => {
  return {
    type: ADDTODO,
    payload: friend 
  };
};

export const setCompleted = (index) => {
  return {
    type: SETCOMPLETED,
    payload: index
  };
};

export const deleteTodo = ()=>{
  return{
    type: DELETETODO
  }
}
