import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render () {
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => 
                    <div>
                        <li key={todo} >{todo}</li>
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

export default connect(mapStateToProps, { fetchTodos })(TodoList);