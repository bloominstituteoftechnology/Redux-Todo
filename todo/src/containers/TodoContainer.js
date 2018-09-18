// Redux
import { connect } from 'react-redux';

// Action Creators
import { handleInputChange, handleSubmit, toggleCompleted, deleteItem, removeAllCompleted } from '../actions/TodoActions';

// Component
import Todo from '../components/Todo';

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        inputText: state.inputText
    };
}

export default connect(mapStateToProps, { handleInputChange, handleSubmit, toggleCompleted, deleteItem, removeAllCompleted })(Todo);
