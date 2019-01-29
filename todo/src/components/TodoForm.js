import React from 'react';

class TodoForm extends React.Component {
    state ={
        newItem: ''
    }
    render(){
        return (
            <div className="TodoForm">
                <input type="text" placeholder="Add new item..." value={this.state.newItem} />
            </div>
        );
    }
}

export default TodoForm;