import * as C from '../constants'

export default function filterReducer(state, action) {
    switch (action.type) {
      case C.SHOW_ALL:
        return 'ALL';
      case C.SHOW_COMPLETE:
        return 'COMPLETE';
      case C.SHOW_INCOMPLETE:
        return 'INCOMPLETE';
      default:
        throw new Error('wtf are you doing');
    }
  };