import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            list: ''
        }
    }

    handleInput = event => {
        this.setState({ list: event.target.value });
    }

    render() {
        return (
            <form>
                <input type='text' placeholder='...todo' name="item" value={this.state.list} onChange={this.handleInput} />
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form >
        );
    }
}

export default TodoForm;