import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { setTodos } from '../../actions';

class TodoList extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('todos')) {
            this.props.setTodos(JSON.parse(localStorage.getItem('todos')));
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props.todos) {
            localStorage.setItem('todos', JSON.stringify(this.props.todos));
        }
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => <Todo key={index} todo={todo} />)}
            </ul >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { setTodos })(TodoList);
