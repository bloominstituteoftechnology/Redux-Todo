import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <form>
                <input placeholder='What to do?' type="text" />
                <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
