import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchTodos , deleteTodo } from "../actions";

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    toggleComplete = (e) => {
        if (e.target.style.textDecoration === 'line-through') e.target.style.textDecoration = 'none';
        else e.target.style.textDecoration = 'line-through';
    }

    render () {
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => 
                    <div>
                        <li key={todo} onClick={this.toggleComplete}>{todo}</li>
                        <button onClick={() => {this.props.deleteTodo(todo)}}>X</button>
                    </div>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state};
};

export default connect(mapStateToProps, { fetchTodos , deleteTodo })(TodoList);