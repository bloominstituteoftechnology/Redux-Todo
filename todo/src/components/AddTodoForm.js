import React from 'react';
import { AddTodo } from '../actions';

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


    render() {
        return (
            <div>
                <form onSubmit={AddTodo}>
                    <input placeholder='This is a placeholder.'
                            type='text'
                            name='addTodoText'
                            value={this.state.addTodoText}
                            onChange={this.handleChanges} />
                    <button onClick={AddTodo}>Add Todo</button>
                </form>
            </div>
        )
    }
}


export default AddTodoForm;