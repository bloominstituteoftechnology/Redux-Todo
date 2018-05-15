// import { ADD, COMPLETED } from '..'

export default (todo = {}, action ) => {
    switch (action.type) {
        case ADD:
            return todo ++;
        case COMPLETED:
            if (COMPLETED === true) {
                //mark completed
            }
    }
};
