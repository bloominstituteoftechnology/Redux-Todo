import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) => <li onClick={() => this.props.markCompleted(index)} key={todo.value}>{todo.value}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { todos: state.todos };
}


export default connect(mapStateToProps, {markCompleted})(TodoList);