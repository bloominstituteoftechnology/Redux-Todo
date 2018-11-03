// import { UPDATE_VALUE, UPDATE_STATUS } from './action';

// const initialState = { value: '', completed: false };

//SECOND, create reducer with switch statements; import
// action.type to serve as switch statement case
import { UPDATE_NAME, UPDATE_STATUS } from './action';

const initialState = { name: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, ...action.payload };
        case UPDATE_STATUS:
            return Object.assign({}, state, {
                name: action.payloadName,
                completed: action.payloadCompleted
            });
        default:
            return state;
    }
};


// export default (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_NAME:
//             return {...state, ...action.payload };
//         case UPDATE_STATUS:
//             return Object.assign({}, state, {
//                 name: action.payloadName,
//                 completed: action.payloadCompleted
//             });
//         default:
//             return state;
//     }
// };



