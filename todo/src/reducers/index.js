export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

const initState = {
    title: 'Goals',
    friends: [{ name: 'World Domination', completed: false}]
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return{
                ...state,
                title: action.payload
            };
        case ADD_FRIEND:
        return {
            ...state,
            friends: [...state.friends, {name: action.payload, completed: false }]
        };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                friends: state.friends.map((friend, index) => {
                    if (index === action.payload) {
                        return { ...friend, completed: !friend.completed };
                    } else {
                        return friend;
                    }
                })
            };
        default:
            return state;    
    }
};

export default reducer;
