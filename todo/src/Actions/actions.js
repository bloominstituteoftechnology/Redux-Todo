export const ADD_COMMENT = "ADD_COMMENT";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addCommentAction = (comment) => {
    return { type: ADD_COMMENT, payload: { value: comment, completed: false }}
}

export const toggleCompleteAction = (comment) => {
    return { type: TOGGLE_COMPLETE }
}