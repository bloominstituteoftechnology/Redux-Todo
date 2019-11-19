const itemList = (state = [], action) => {
  switch (action.type) {
    case 'AddItem':
      return [...state,
        { id: action.id, text: action.text, completed: false, }
      ];
    case 'ToggleItem':
      return state.map(todo =>
        (todo.id === action.id) ?
        { ...todo, completed: !todo.completed }
        : todo, );
    default:
      return state;
  }
};

export default itemList;
