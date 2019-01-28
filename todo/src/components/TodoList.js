import React from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import {addNewTodo} from '../actions'
import {toggleTodo} from '../actions'

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    handleInput= ev =>{
        this.setState({ [ev.target.name]: ev.target.value });
    }
    render(props){
        console.log(this.props)
        return(
            <div>
                {this.props.todos.map(todo => {
                    return <TodoItem toggleTodo={this.props.toggleTodo} todo={todo} key={todo.value}/>
                })}
                
                <input 
                type="text"
                name="newTodo"
                />
                <button>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
      todos: state.todos
    };
  };

  export default connect(
      mapStateToProps,
      {addNewTodo, toggleTodo}
  )(TodoList);
