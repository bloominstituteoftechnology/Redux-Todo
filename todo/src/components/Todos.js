import React, { Component } from "react";
import { connect } from 'react-redux';
import { complete, remove } from '../actions';

class Todos extends Component {

    render() {
        const { todos, complete, remove } = this.props
        return (
            <div>
                <h2>Your To-do List:</h2>
                {todos.length > 0 
                && 
                todos.map((todo, index) =>
                    <div key={todo.value}>
                        <div>{todo.value}</div>
                        <input type='checkbox' checked={todo.complete} onClick={() => complete(index)}/>
                        <button onClick={() => remove(index)}>Delete</button>
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

export default connect(mapStateToProps, { complete, remove })(Todos);