import React, { Component } from 'react';

class TodoForm extends Component {
    render () {
        return (
            <div>
                <input 
                    name="currentText" 
                    type="text" 
                    placeholder="Add todo!"
                />
                <button>Add todo</button>
            </div>
        );
    }
}

export default TodoForm;
