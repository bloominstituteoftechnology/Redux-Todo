import { ADD, DELETE } from '../actions';

export default ((state = []),
action => {
  switch (action.type) {
    case "ADD":
    // add_stuff
    case "DELETE":
    // delete_stuff
    default:
      return state;
  }
});
