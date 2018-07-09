const FETCH_TODOS = "FETCH_TODOS";
const ADD_TODO = 'ADD_TODO';

const todos = ["Learn Redux", "Practice Redux", "Make mistakes with Redux", "Master Redux"];

const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
    payload: todos
  };
};

const inputOnChange = (e) => {
  console.log(e.target.value)
  return{
    type:ADD_TODO,
    payload: [...todos, e.target.value]
  }
}
export { FETCH_TODOS, fetchTodos, inputOnChange };