import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask({ text: event.target.input.value, id: shortid.generate() })
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input placeholder="Add new task..." name="input" />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
};

export default TodoForm;