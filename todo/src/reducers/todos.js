let nextID = 3;

const initialState = [
  {id: 0, text: 'todo#1', completed: false},
  {id: 1, text: 'todo#2', completed: true},
  {id: 2, text: 'todo#3', completed: false},
];

export default (todos = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: nextID++,
          text: action.text,
          completed: false
        }
      ]
    default:
      return todos;
  }
}
