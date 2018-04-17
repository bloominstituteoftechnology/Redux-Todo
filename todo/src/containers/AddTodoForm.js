import { connect } from 'react-redux';
import { addTodo } from '../Apps';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTodo(text));
    }
  };
};

let AddTodoForm = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoForm;