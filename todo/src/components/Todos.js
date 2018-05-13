import React, { Component } from "react";
import { connect } from 'react-redux';
import { complete } from '../actions';

class Todos extends Component {

    render() {
        const { todos, complete } = this.props
        console.log(todos)
        return (
            <div>
                <h2>Your To-do List:</h2>
                {todos.length > 0 
                && 
                todos.map((todo, index) =>
                    <div key={todo.value}>
                        <div>{todo.value}</div>
                        <input type='checkbox' checked={todo.complete} onClick={() => complete(index)}/>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { todos } = state
    return {
        todos
    };
};

export default connect(mapStateToProps, { complete })(Todos);