import { ADD, COMPLETE, DELETE } from '../actions';

const initialState  =   {
    todo: []
}

export default (state = initialState, action)   {
    switch (action.type)    {
        case ADD:
            return todo: [...state.todo, action.payload];
    }
}
