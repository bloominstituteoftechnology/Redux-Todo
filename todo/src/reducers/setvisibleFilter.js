
//set visibility state
const setvisibleFilter = (state = 'SHOW', action) => {
    switch (action.type) {
      case 'SETVISIBILITY':
        return action.filter
      default:
        return state
    }
  }

  export default setvisibleFilter