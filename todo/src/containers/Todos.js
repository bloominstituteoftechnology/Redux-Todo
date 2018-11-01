import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import {loadSavedTodos, completeTodo, deleteTodo} from '../actions/actions';

class Todos extends React.Component{
    constructor(props){
        super(props);

        window.onbeforeunload = this.saveTodos;
    }

    componentDidMount(){
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if(savedTodos !==null){
            this.props.loadSavedTodos(savedTodos);
        }
    }

    saveTodos = ()=>{
        localStorage.setItem('todos', JSON.stringify(this.props.todos));
    }

    render(){
        return(
            <ul>
                {this.props.todos.map(item=><Todo key={item.id} todo={item} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>)}
            </ul>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {loadSavedTodos, completeTodo, deleteTodo})(Todos);