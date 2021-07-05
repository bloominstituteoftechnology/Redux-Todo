import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todoList';
import {addTodo, toggleTodo} from '../store/actions';

class TodoContainer extends React.Component{
    state = {
        inputText: '',
    };

    handleChange=event => this.setState({inputText:event.target.value});

    addTodo = event =>{
        event.preventDefault();
        this.props.addTodo(this.state.inputText);
    }

    toggleTodo = event =>{
        event.preventDefault();
        this.props.toggleTodo();
    }

    render(){
        return(
            <TodoList
                toggleTodo={this.toggleTodo}
                addTodo={this.addTodo}
                handleChange={this.handleChange}
                inputText={this.state.inputText}
                todoList={this.props.todos} 
            />
        );
    }
}

//connect the component to the store
const mapStateToProps = state =>({
    todos: state.todos,
});

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoContainer);