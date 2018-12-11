import { ADD_GOAL, TOGGLE_COMPLETED  } from "../reducers";

export const addGoal = goal => {
    console.log(goal);
    return {
        type: ADD_GOAL,
        payload: goal
    };
};

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    };
};