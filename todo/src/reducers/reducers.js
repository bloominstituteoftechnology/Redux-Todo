

let ID = 0;

const initialState = [];


export default (todos = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: ID++,
          text: action.text,
          completed: false
        }
      ]
    default:
      return todos;
  }
}