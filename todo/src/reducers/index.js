import { ADD_TODO } from '../actions';


const defaultTODOS = {
  todos: [
    {value: 'Go to the gym', completed: false},
    {value: 'Pick up the dog from vet', completed: false}
  ]
}


export default (state = defaultTODOS, action) => {
  switch (action.type) {
    case ADD_TODO:
      return console.log('add todo');
    default:
      return state;
  }
};
