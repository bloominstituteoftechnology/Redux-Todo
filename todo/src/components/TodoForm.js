import React from 'react';
import { addTodo } from '../actions';
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

    render() {
        return(
            <div>
                <form onSubmit={this.addTodoHandler}>
                    <input 
                        type='text' 
                        name='formText' 
                        onChange={this.handleChange} 
                        placeholder='Add Todos Here' 
                        value={this.state.formText}
                    />
                    <button>Add Todo</button>
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

export default connect(mapStateToProps, { addTodo })(TodoForm);