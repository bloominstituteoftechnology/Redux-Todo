import { UPDATECOMPLETE, ADDTODO } from '../actions';

const initialState = {
    toDos: [
        {
            text: '',
            completed: false,
            id: 0,
        }
    ],
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATECOMPLETE:
            const id = action.payload;
            const toDos = state.toDos.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed;
                    return item;
                }
                else return item;
            });
            return Object.assign({}, state, {toDos: toDos });

        case ADDTODO:
            return Object.assign({}, state, {
                toDos:[...state.toDos, action.payload]});

        default:
            return state;
    }
}