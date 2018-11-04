import React from 'react';

class TodoForm extends React.Component {

    state = {
        todo: ''
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.createTodoAction(this.state.todo);
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.inputHandler}
                />
                <button type="submit">Create</button>
      </form>
        );
    }
}

export default TodoForm;