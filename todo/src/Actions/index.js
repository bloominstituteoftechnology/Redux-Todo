export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addToDo = () => {
  return {
    type: "ADD_TODO",
    Payload: [{}] //Placeholder
  };
};

export const updateToDo = () => {
  return {
    type: "UPDATE_TODO",
    payload: "completed true/false" //Placeholder
  };
};
