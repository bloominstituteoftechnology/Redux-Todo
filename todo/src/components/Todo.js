import React from 'react';

export default class Todo extends React.Component {

    state = {
        todo: this.props.todo
    }

    render(){

        return (
            <div>
            <h1 className={this.props.todo.completed ? 'completed' : null}
                onClick={() => this.props.toggle(this.props.todo.id)}>
                    
                    {this.props.todo.value}
            
            </h1>
            </div>
        )

    }

}