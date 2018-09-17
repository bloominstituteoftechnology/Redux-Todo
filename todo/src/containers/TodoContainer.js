// Redux
import { connect } from 'react-redux';

// Action Creators
import { handleInputChange, handleSubmit } from '../actions/TodoActions';

// Component
import Todo from '../components/Todo';

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        inputText: state.inputText
    };
}

export default connect(mapStateToProps, { handleInputChange, handleSubmit })(Todo);
