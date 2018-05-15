import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render () {
        console.log(this.props);
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => <li key={todo}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state};
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);