import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {fetchTodos, todoList} from './../actions/index';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
    return (
        <div>
            {this.props.todoList.map(item => {
          return <div key={item} item={item}><Todo item={item}/></div>
        })}
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        todoList: state
    };
}

export default connect(mapStateToProps, {fetchTodos})(TodoList);