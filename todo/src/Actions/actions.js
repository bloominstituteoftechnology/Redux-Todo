export const ADD_COMMENT = "ADD_COMMENT";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

let nextId = 1;

export const addCommentAction = (comment) => {
    return { type: ADD_COMMENT, payload: { value: comment, completed: false, Id: nextId++}}
}

export const toggleCompleteAction = (Id) => {
    return { type: TOGGLE_COMPLETE, payload: Id}
}