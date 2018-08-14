import { ADD_TODO, COMPLETE_TODO} from '../actions';


export default (list=[], action) => {
    switch (action.type) {
      case ADD_TODO:
      return [ ...list, {
        id: action.id,
        task: action.task,
        completed: false }
        ]
     
      case COMPLETE_TODO:
      return list.map(item =>
        (item.id === action.id)? {...item, completed: !item.completed}: item)
      default:
        return list;

    }
  };
  