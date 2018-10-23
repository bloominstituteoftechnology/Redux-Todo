import {} from '../actions'

const initialState = {
  todos: [
    {value: 'walk dog', completed: false},
    {value: 'dishes', completed: false},
    {value: 'pay bills', completed: true},
  ]
}


const todo = (state = initialState, action) => {
  return state;
  console.log('inside the reducer');
}


export default todo;
