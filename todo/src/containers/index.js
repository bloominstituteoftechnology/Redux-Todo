import { connect } from 'react-redux';
import {
  handleInput,
  handleSubmit,
  toggleComplete,
  deleteItem
} from '../actions';
import Todo from '../components/Todo.js';

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    inputText: state.inputText
  };
};

export default connect(mapStateToProps, { handleInput, handleSubmit, toggleComplete, deleteItem }(Todo));
