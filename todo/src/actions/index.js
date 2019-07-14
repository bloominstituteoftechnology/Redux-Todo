export const UPDATE_TITLE = "UPDATE_TITLE";

export function updateTitle(newTitle) {
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    };
}