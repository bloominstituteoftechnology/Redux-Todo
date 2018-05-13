import React, { Component } from "react";
import { connect } from 'react-redux';

class Todos extends Component {

    render() {
        const { todos } = this.props
        return (
            <div>
                <h2>Your To-do List:</h2>
                {todos.length > 0 
                && 
                todos.map(todo =>
                    <div key={todo}>{todo}</div>
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

export default connect(mapStateToProps)(Todos);