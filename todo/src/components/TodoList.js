import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    toggleComplete = (e) => {
        if (e.target.style.textDecoration === 'line-through') e.target.style.textDecoration = 'none';
        else e.target.style.textDecoration = 'line-through';
    }

    render () {
        console.log(this.props);
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => <li key={todo} onClick={this.toggleComplete}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state};
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);