import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (<li key={todo.id} >{todo.text}</li>) )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {  })(TodoList);