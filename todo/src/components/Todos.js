import React, {Component} from "react";
import Todo from "./Todo"
import {addTodo} from "../actions/actions"
import {connect} from 'react-redux'

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    render() {
        console.log(this.props);
        return (
            <>
                <div className="flex-column">
                    {this.props.todos.map(todo => {
                        return <div>{todo.value}</div>
                    })}
                </div>

                <div className="flex-row">
                    <input onChange={e => this.setState({text: e.target.value})} />
                    <button onClick={() => this.props.addTodo({value: this.state.text, completed: false})}>ADD TODO</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(Todos);
