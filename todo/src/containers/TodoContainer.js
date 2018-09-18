// Redux
import { connect } from 'react-redux';

// Action Creators
import { handleSubmit, toggleCompleted, deleteItem, removeAllCompleted } from '../actions/TodoActions';

// Component
import Todo from '../components/Todo';

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
}

export default connect(mapStateToProps, { handleSubmit, toggleCompleted, deleteItem, removeAllCompleted })(Todo);
