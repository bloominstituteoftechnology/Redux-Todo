export const ADD_GOAL = 'ADD_GOAL';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

const initState = {
    title: 'Goals',
    goals: [{ goal: 'World Domination', completed: false}]
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_GOAL:
        return {
            ...state,
            goals: [...state.goals, {goal: action.payload, completed: false }]
        };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                goals: state.goals.map((goal, index) => {
                    if (index === action.payload) {
                        return { ...goal, completed: !goal.completed };
                    } else {
                        return goal;
                    }
                })
            };
        default:
            return state;    
    }
};

export default reducer;
