import React from "react";
import { connect } from "react-redux";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        }
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => {
                    return <p>{todo.text}</p>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, {})(Container) 