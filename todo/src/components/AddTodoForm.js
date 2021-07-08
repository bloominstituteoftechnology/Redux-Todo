import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addTodoText: ''
        }
    }

    handleChanges = event => {
        this.setState({ addTodoText: event.target.value});
    }

    handleClick = event => {
        event.preventDefault();
        this.props.addTodo(this.state.addTodoText);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input placeholder='This is a placeholder.'
                            type='text'
                            name='addTodoText'
                            value={this.state.addTodoText}
                            onChange={this.handleChanges} />
                    <button onClick={this.handleClick}>Add Todo</button>
                </form>
            </div>
        )
    }
}
    

export default connect(null, { addTodo })(AddTodoForm);