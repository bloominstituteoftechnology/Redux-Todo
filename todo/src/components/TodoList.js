import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let nextID = 0;

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value})
    }
    addTodoHandler = e => {
        const {text} = this.state;
        const newTodo = {
            text,
            completed: false,
            id: nextID++,
        };
        this.props.addTodo(newTodo);
        this.setState({text: ''});
    }
    render(){
        const {todos} = this.props;
        return(
            <div>
                <input placeholder="Add todo item(s)"
                       onChange={this.handleChange}
                       name="text"
                       value={this.state.text}/>
                <button onClick={this.addTodoHandler}>Add Todo</button>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                        )})}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {addTodo})(TodoList)