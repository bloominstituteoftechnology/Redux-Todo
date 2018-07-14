import { VisbilityFilters } from '../actions/index';

const visibilityFilter = ( state = VisbilityFilters.SHOW_ALL , action ) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            state;
    }
}

export default visibilityFilter