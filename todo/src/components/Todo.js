import React from 'react';

export default class Todo extends React.Component {

    state = {
        todo: this.props.todo
    }

    render(){
        const {value, id} = this.props.todo;
        return (
            <div>
            <h1 className={this.props.todo.completed ? 'completed' : null}
                onClick={() => this.props.toggle(this.props.todo.id)}>
                    
                    {value}
            
            </h1>
            <div className='delete' onClick={() => this.props.delete(id)}>X</div>
            </div>
        )

    }

}