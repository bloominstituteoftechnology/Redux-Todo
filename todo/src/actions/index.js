import { CHANGE_TITLE, ADD_FRIEND, TOGGLE_COMPLETED  } from "../reducers";

export const changeTitle = text => {
    return {
        type: CHANGE_TITLE,
        payload: text
    };
};

export const addFriend = name => {
    console.log(name);
    return {
        type: ADD_FRIEND,
        payload: name
    };
};

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    };
};