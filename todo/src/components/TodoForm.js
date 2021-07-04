import React, { Component } from 'react';

class TodoForm extends Component {
    render () {
        return (
            <div>
                <input 
                    name="currentText" 
                    type="text" 
                    placeholder="Add todo!"
                    onChange={this.props.handleInputChange}
                />
                <button onClick={ this.props.addTodo}>Add todo</button>
            </div>
        );
    }
}

export default TodoForm;
