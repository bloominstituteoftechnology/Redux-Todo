import React from 'react';
import { addTodo, deleteTodos } from '../actions';
import { connect} from 'react-redux';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formText: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addTodoHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.formText);
        this.setState({ formText: '' });
    }

    deleteTodosHandler = event => {
        event.preventDefault();
        this.props.deleteTodos();
    }

    render() {
        return(
            <div>
                <form 
                    className='todo-form'
                    onSubmit={this.addTodoHandler}
                >
                    <input
                        className='todo-form-input' 
                        type='text' 
                        name='formText' 
                        onChange={this.handleChange} 
                        placeholder='Add Todos Here...' 
                        value={this.state.formText}
                        autoComplete='off'
                    />
                    <button className='todo-form-button'>
                        <i className="fas fa-plus"></i>
                    </button>
                    <button 
                        className='todo-form-button'
                        onClick={this.deleteTodosHandler}
                    >
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, { addTodo, deleteTodos })(TodoForm);