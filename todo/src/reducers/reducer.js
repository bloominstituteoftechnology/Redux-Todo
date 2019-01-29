const initialState = {
  title: "Title from Redux store",
  list: ["one", "two", "three"]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
