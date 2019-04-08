// Redux
import { connect } from 'react-redux';
import {
  handleInputChange,
  handleSubmit,
  toggleCompleted,
  deleteItem
} from '../actions/TodoActions';
import Todo from '../components/Todo';

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    inputText: state.inputText
  };
};

export default connect(
  mapStateToProps,
  { handleInputChange, handleSubmit, toggleCompleted, deleteItem }
)(Todo);