const initialState = {
  todos: [
    {
      todo: "Take out the trash",
      complete: false
    },
    {
      todo: "Walk the dog",
      complete: false
    }
  ]
};

export default function reducer(state = initialState, action) {
  return state;
}
