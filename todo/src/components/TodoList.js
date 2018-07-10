import React from 'react';
import { connect } from 'react-redux';
import { makeTodo, editTodo, removeTodo } from '../actions/index';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.makeTodo = this.makeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    onChange = (event) => {
        this.setState({})
    }
}

render(

)

export default TodoList;