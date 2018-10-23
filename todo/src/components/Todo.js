import React from 'react';

export default class Todo extends React.Component {

    state = {
        todo: this.props.todo
    }

    render(){

        return (
            <div>
            <h1>{this.props.todo.value}</h1>
            </div>
        )

    }

}