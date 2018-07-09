import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            completed: false
        }
    }

    addTodo = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
    return (
        <div>
            <input 
                type='text'
                placeholder='New Todo'
                defaultValue=''
                />
            <button onClick={this.addTodo}>Add</button>
        </div>
    )
}
}

export default TodoForm;