import React from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import {addNewTodo} from '../actions'
import {toggleTodo} from '../actions'

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(props){
        let input
        console.log(this.props)
        return(
            <div>
                {this.props.todos.map(todo => {
                    return <TodoItem toggleTodo={this.props.toggleTodo} todo={todo} key={todo.value}/>
                })}
                <form onSubmit={e =>{e.preventDefault()
                    if(!input.value.trim()){
                        return
                    } this.props.addNewTodo(input.value)
                    input.value =''
                }}> 
                    <input 
                    ref={node =>(input = node)}
                    type="text"
                    name="newTodo"
                    />
                    <button>Submit</button>
                </form>    
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
