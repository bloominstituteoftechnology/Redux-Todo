export const ADD_COMMENT = "ADD_COMMENT";

export const addCommentAction = comment => {
    return { type: ADD_COMMENT, payload: { value: comment, completed: false }}
}