export const ADDTODO = "ADDTODO";
export const DELETETODO = " DELETETODO";

export const addToDo = () => {
  return { type: ADDTODO }
}

export const deleteToDo = () => {
  return { type: DELETETODO }
}
