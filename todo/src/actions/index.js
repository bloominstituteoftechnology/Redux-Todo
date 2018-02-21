export const ADD_TODO = "ADD_TODO";
export const UPDATE_COMPLETED = "UPDATE_COMPLETED";
export const DELETE_ITEM = "DELETE_ITEM";

let nextID = 0;
export const add_todo = todo => {
  const payload = {id: nextID++, todo:todo, completed:false};
  return {
    type: "ADD_TODO",
    payload: payload
  };
};

export const update_completed = todo => {
    return {
        type: "UPDATE_COMPLETED",
        payload: todo,
    };
};

export const delete_item = todo => {
  return {
      type: "DELETE_ITEM",
      payload: todo,
  };
};

