import { CompletedFilters } from './Action/Action';

const CompletedFilters = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'COMPLETED_TODO':
            return action.filter;
        default:
            return state;
    }
}

export default CompletedFilters;