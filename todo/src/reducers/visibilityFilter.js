import { VisibilityFilters } from '../actions';

const visbilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.visbilityFilter
    default:
      return state
  };
};

export default visbilityFilter;