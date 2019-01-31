const reducer = _ => {
  return {
    user: {
      name: "Dustin"
    },
    movies: ["Star Wars", "Lord of the Rings", "Harry Potter"],
    todoList: [{ task: "Learn Redux", id: 0, completed: false }],
    moviesToWatch: 13
  };
};
export default reducer;
