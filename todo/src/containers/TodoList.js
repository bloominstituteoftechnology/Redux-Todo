import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';


class TodoList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo =>
                    <div>
                        <li key={todo}>{todo}</li>
                        <button onClick={() => {this.props.deleteTodo(todo)}}>delete</button>
                    </div>
                    )}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
      todos: state
    }
}

export default connect(mapStateToProps, { deleteTodo })(TodoList);