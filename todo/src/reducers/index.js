

const initialState = {
    todos: [{text: 'Clean room', completed: false, id: 0}],
}


export default (state = initialState , action) => {
    switch(action.type) {
      default:
        return state;
    }
  }