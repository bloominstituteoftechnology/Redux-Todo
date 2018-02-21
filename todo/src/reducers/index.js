import { COMPLETE, UNCOMPLETE } from '../actions';

export default (completed = false, action) => {
  switch (action.type) {
    case COMPLETE:
      return (completed = true);
    case UNCOMPLETE:
      return (completed = false);
    default:
      return completed;
  }
};
